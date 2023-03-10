import { useCallback, useEffect, useState } from "react"
import { auth } from "../firebase"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { Form, Alert } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { TextField } from "@mui/material"
import { styled } from "@mui/material/styles"
import "./phoneAuth.css"
import ReCAPTCHA from "react-google-recaptcha"

const PhoneAuth = ({
  setPhoneVerified,
  phoneVerified,
  phoneNumb,
  setPhoneNumb,
  setCaptchaValue,
  captchaValue,
}) => {
  const VerifyButton = styled(Button)({
    backgroundColor: "#C59B6D",
    width: "120px",
    height: "40px",
    fontSize: "18px",
    fontWeight: "bold",
    border: "none",
    "&:hover": {
      backgroundColor: "#707070",
    },
    "&:focus": {
      backgroundColor: "#C59B6D",
      border: "unset",
    },
  })

  const countryCode = "+852"
  const [expandForm, setExpandForm] = useState(false)
  const [error, setError] = useState("")
  // eslint-disable-next-line no-unused-vars
  const [OTP, setOTP] = useState("")
  const [isSentCode, setIsSentCode] = useState(false)
  const [redo, setRedo] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showsendBtn, setShowsendBtn] = useState(true)
  const [showRecaptcha, setShowRecaptcha] = useState(true)

  useEffect(() => {
    let reg = /^[2-9][0-9]{7}$/gm
    if (reg.test(phoneNumb) && phoneNumb.length == 8) {
      setPhoneVerified(true)
    } else {
      setPhoneVerified(false)
    }
  }, [setPhoneVerified, phoneVerified, phoneNumb, captchaValue])

  const restart = () => {
    setError("")
    setExpandForm(false)
    setOTP("")
    setIsSentCode(false)
    setRedo(false)
    setIsSuccess(false)
    setShowsendBtn(true)
    setShowRecaptcha(true)
  }

  const sentCode = () => {
    setError("")
    setExpandForm(true)
    setIsSentCode(true)
  }
  const failsendCode = () => {
    setIsSentCode(false)
    setRedo(true)
    setIsSuccess(false)
    setShowsendBtn(false)
  }

  const verified = () => {
    setError("")
    setPhoneVerified(true)
    setIsSuccess(true)
  }
  const notVerified = () => {
    setPhoneVerified(false)
    setRedo(true)
  }

  const generateRecaptha = () => {
    setShowRecaptcha(true)
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    )
  }

  const requestOTP = (e) => {
    e.preventDefault()
    if (phoneNumb.length >= 8) {
      generateRecaptha()
      let appVerifier = window.recaptchaVerifier
      signInWithPhoneNumber(auth, countryCode + phoneNumb, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult
          sentCode()
        })
        .catch((error) => {
          //error sms not sent
          setShowRecaptcha(false)
          if (error.message.includes("too-many-requests")) {
            setError("??????!???????????????????????????????????????")
            failsendCode()
          } else if (error.message.includes("INVALID_CODE")) {
            setError("?????????????????????????????????")
            failsendCode()
          } else if (error.message.includes("TOO_LONG")) {
            setError("????????????????????????????????????")
            failsendCode()
          }
          failsendCode()
        })
    } else {
      return setError("?????????????????????")
    }
  }

  const verifyOTP = (e) => {
    let otp = e.target.value
    setOTP(otp)
    if (otp.length === 6) {
      //verify otp
      let confirmationResult = window.confirmationResult
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          //   const user = result.user
          verified()
        })
        .catch((error) => {
          if (error.message.includes("invalid")) {
            setError("?????????????????????????????????")
          } else if (error.message.includes("expired")) {
            setError("???????????????")
          }
          notVerified()
        })
    }
  }

  const handleRecaptchav2 = useCallback((value) => {
    // console.log("Captcha value:", value)
    if (value !== "" && value !== null) {
      setCaptchaValue(value)
    }
  }, [])

  return (
    <div>
      <Form.Group className="mb-3">
        <TextField
          label="????????????"
          variant="outlined"
          placeholder="e.g. 98765432"
          value={phoneNumb}
          required
          fullWidth
          // inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          onChange={(e) => {
            setPhoneNumb(e.target.value)
          }}
        />
        {!phoneVerified && phoneNumb.length > 8 && (
          <Form.Label>?????????????????????</Form.Label>
        )}
      </Form.Group>
      <ReCAPTCHA
        sitekey="6LdCiIgfAAAAAJ2YSGdrLVG2WuymgVwiJdpuNJSX"
        onChange={handleRecaptchav2}
      />

      {/* {expandForm && (
        <Form.Control
          type="otp"
          placeholder="???????????????"
          onChange={verifyOTP}
          disabled={isSuccess}
        />
      )}
      {!expandForm && showsendBtn && (
        <VerifyButton className="mb-3" onClick={requestOTP}>
          ???????????????
        </VerifyButton>
      )}

      {showRecaptcha && (
        <div style={{ zIndex: 999 }} id="recaptcha-container"></div>
      )}

      <div className="d-flex mt-2">
        {redo && <VerifyButton onClick={restart}>????????????</VerifyButton>}
        {isSentCode && <p className="msg-success ms-2">??????????????????</p>}
      </div> */}
      {error && (
        <Alert className="mt-2" variant="danger">
          {error}
        </Alert>
      )}
      {/* {isSuccess && <p className="msg-success">??? ????????????????????????</p>} */}
    </div>
  )
}

export default PhoneAuth
