import { useEffect, useState, useCallback } from "react"
import { sendEmail } from "../Email/SendEmail"
import { auth } from "../../firebase"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { TextField } from "@mui/material"
import { Form, Alert } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { styled } from "@mui/material/styles"
import "../phoneAuth.css"

const ChatbotSMSVerify = ({ triggerNextStep, steps }) => {
  const handleSubmit = () => {
    triggerNextStep({ trigger: "11" })
  }
  const handleFail = () => {
    triggerNextStep({ trigger: "9" })
  }
  const [phoneNumb, setPhoneNumb] = useState("")

  useEffect(() => {
    setPhoneNumb(steps[10].value)
    if (phoneNumb !== "") {
      requestOTP()
    }
    return () => {
      setPhoneNumb("")
    }
  }, [steps, phoneNumb])

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

  const [OTP, setOTP] = useState("")

  const countryCode = "+852"
  const [expandForm, setExpandForm] = useState(false)
  const [error, setError] = useState("")
  // eslint-disable-next-line no-unused-vars
  const [isSentCode, setIsSentCode] = useState(false)
  const [redo, setRedo] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showsendBtn, setShowsendBtn] = useState(true)
  const [showRecaptcha, setShowRecaptcha] = useState(true)

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

  const generateRecaptha = () => {
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

  const requestOTP = () => {
    // e.preventDefault()
    if (phoneNumb.length >= 8) {
      generateRecaptha()
      let appVerifier = window.recaptchaVerifier
      signInWithPhoneNumber(auth, countryCode + phoneNumb, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult
          setExpandForm(true)
        })
        .catch((error) => {
          //error sms not sent
          if (error.message.includes("too-many-requests")) {
            alert("??????!???????????????????????????????????????")
          } else if (error.message.includes("INVALID_CODE")) {
            alert("?????????????????????????????????")
          } else if (error.message.includes("TOO_LONG")) {
            alert("????????????????????????????????????")
            handleFail()
          }
        })
    } else {
      return console.log("")
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
          handleSubmit()
          setIsSuccess(true)
        })
        .catch((error) => {
          if (error.message.includes("invalid")) {
            setError("?????????????????????????????????")
          } else if (error.message.includes("expired")) {
            setError("???????????????")
          }
        })
    }
  }

  return (
    <div>
      {expandForm && (
        <>
          <div>
            <p className="msg-success">
              ????????????????????????????????????????????????????????????????????????
            </p>
          </div>
          <Form.Control
            type="otp"
            placeholder="???????????????"
            onChange={verifyOTP}
            disabled={isSuccess}
          />
        </>
      )}

      {/* {!expandForm && showsendBtn && (
        <VerifyButton className="mb-3" onClick={requestOTP}>
          ???????????????
        </VerifyButton>
      )} */}
      {showRecaptcha && (
        <div style={{ zIndex: 999 }} id="recaptcha-container"></div>
      )}
      <div className="d-flex mt-2">
        {redo && <VerifyButton onClick={restart}>????????????</VerifyButton>}
        {isSentCode && <p className="msg-success ms-2">??????????????????</p>}
      </div>
      {error && (
        <Alert className="mt-2" variant="danger">
          {error}
        </Alert>
      )}
      {isSuccess && <p className="msg-success">??? ????????????????????????</p>}
    </div>
  )
}

export default ChatbotSMSVerify
