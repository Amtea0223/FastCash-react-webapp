import TextField from "@mui/material/TextField"
import { useEffect, useState } from "react"
import "../applyForm.css"
import PhoneAuth from "../PhoneAuth"

const Step3Content = ({
  setAppliciantName,
  setPhoneNumb,
  appliciantName,
  phoneNumb,
  isVerified,
}) => {
  const [phoneVerified, setPhoneVerified] = useState(false)
  const [captchaValue, setCaptchaValue] = useState("")

  useEffect(() => {
    if (appliciantName !== "" && phoneVerified && captchaValue != "") {
      isVerified(true)
    } else {
      isVerified(false)
    }
  }, [appliciantName, phoneVerified, isVerified, captchaValue])

  return (
    <div className="step-content">
      <h3>確認申請協議：</h3>
      <br />
      <p>
        請先填寫以下所需資料，讓我們可以加快審批過程。
        <br />
        我們或有可能會聯絡閣下提供更多申請所需的資料。
      </p>

      <TextField
        className="mb-5 mt-5"
        id="appliciantName"
        label="姓名"
        variant="outlined"
        value={appliciantName}
        required
        onChange={(e) => {
          setAppliciantName(e.target.value)
        }}
      />

      <PhoneAuth
        setCaptchaValue={setCaptchaValue}
        captchaValue={captchaValue}
        phoneNumb={phoneNumb}
        setPhoneNumb={setPhoneNumb}
        setPhoneVerified={setPhoneVerified}
        phoneVerified={phoneVerified}
      />
      <p style={{ fontSize: "12px", marginTop: "10px" }}>
        *本人已年滿18歲，閱讀並同意此網上的貸款細節及條款。本人明白和同意，在此申請表提供的個人資料將記錄
        於資料系統。本人明白Richmore
        Finance對貸款申請審批與否有絕對決定權，而毋需作出解釋。
      </p>
    </div>
  )
}

export default Step3Content
