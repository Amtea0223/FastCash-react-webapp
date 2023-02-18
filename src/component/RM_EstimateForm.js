import { useState, useRef, useEffect } from "react"
import "./estimateForm.css"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import Checkbox from "@mui/material/Checkbox"
import { FormDatatext } from "../codeHelper/useFormatDatatext"
import { useMediaQuery } from "react-responsive"
import { isMobilePhone } from "validator"
import moment from "moment"
import { sendEmail } from "./Email/SendEmail"
import { ENV } from "../config"

const EstimateForm = ({ content }) => {
  const formRef = useRef()
  const SubmitButton = styled(Button)({
    backgroundColor: "#C59B6D",
    width: "180px",
    height: "50px",
    fontSize: "24px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#707070",
    },
  })
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  })

  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" })

  const [appliciantname, setAppliciantname] = useState("")
  const [phoneNumb, setPhoneNumb] = useState("")
  const [address, setAddress] = useState("")
  const [reply_phone, setReply_phone] = useState(false)
  const [reply_wtsapp, setReply_wtsapp] = useState(false)
  const [confirm1, setConfirm1] = useState(false)
  const [confirm2, setConfirm2] = useState(false)
  const [isVerified, setisVerified] = useState(false)

  const [checkList, setCheckList] = useState("")

  useEffect(() => {
    let reply_method = ""
    let msg = ""
    if (reply_phone && reply_wtsapp) {
      reply_method = "電話和WhatsApp"
    } else if (reply_phone && !reply_wtsapp) {
      reply_method = "電話"
    } else if (!reply_phone && reply_wtsapp) {
      reply_method = "WhatsApp"
    }
    if (confirm2) msg = "接受推廣，回覆方式： " + reply_method
    else msg = "不接受推廣，回覆方式： " + reply_method
    setCheckList(msg)
  }, [reply_phone, reply_wtsapp, confirm2])

  const CleanData = () => {
    setConfirm1(false)
    setConfirm2(false)
    setAppliciantname("")
    setPhoneNumb("")
    setAddress("")
    setReply_phone(false)
    setReply_wtsapp(false)
  }

  const handleSubmit = () => {
    const data = {
      name: appliciantname,
      phone: phoneNumb,
      byWhatsapp: reply_wtsapp,
      byPhone: reply_phone,
      address: address,
      agreeTerms1: confirm1,
      agreeTerms2: confirm2,
      timestamp: moment()
        .utcOffset(8)
        .format("YYYY-MM-DD HH:mm:ss"),
    }

    fetch(ENV + "/api/v1/valuation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          setisVerified(true)
        }
      })
      .catch((err) => {
        console.log(err.message)
      })
      .finally(() => {
        CleanData()
      })
  }

  const validatePhoneInput = (val) => {
    if (val === "") {
      return false
    } else {
      const result = isMobilePhone(val, "en-HK")
      return result
    }
  }

  const ValidateData = () => {
    setisVerified(false)
    if (!!!confirm1) {
      return alert("請確認條款")
    } else if (appliciantname.replace(/\s/g, "") === "") {
      setisVerified(false)
      return alert("請填寫個人姓名")
    } else if (validatePhoneInput(phoneNumb) === false) {
      setisVerified(false)
      return alert("請填寫正確的電話號碼")
    } else if (address.replace(/\s/g, "") === "") {
      setisVerified(false)
      return alert("請填寫地址")
    } else if (!reply_phone && !reply_wtsapp) {
      setisVerified(false)
      return alert("請至少選擇一種回覆方式")
    } else {
      handleSubmit()
    }
  }

  const checkbox_list2 = [
    {
      id: 1,
      text: "電話",
      state: setReply_phone,
    },
    {
      id: 2,
      text: "WhatsApp",
      state: setReply_wtsapp,
    },
  ]

  return (
    <>
      {isDesktopOrLaptop && (
        <form
          ref={formRef}
          onSubmit={(e) => sendEmail(e, formRef.current, "template_valuation")}
        >
          <input
            type="text"
            style={{ display: "none" }}
            name="checklist"
            defaultValue={checkList}
          ></input>
          <div className="estimForm">
            <div className="estimForm1">
              <h2>{content?.valuation?.title}</h2>
              {FormDatatext(content?.valuation?.description)}
            </div>
            <div className="estimForm2">
              <div className="d-flex mb-3">
                <Checkbox
                  checked={confirm1}
                  onChange={(e) => {
                    setConfirm1(e.target.checked)
                  }}
                />
                *
                <label className="ms-2 ">
                  {content?.valuation?.otherRemark1}
                </label>
              </div>
              <div className="d-flex mb-3">
                <Checkbox
                  checked={confirm2}
                  onChange={(e) => {
                    setConfirm2(e.target.checked)
                  }}
                />
                &nbsp;
                <label className="ms-2 ">
                  {content?.valuation?.otherRemark2}
                </label>
              </div>
            </div>
            <div className="estimForm3">
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "63ch" },
                }}
                autoComplete="off"
              >
                <TextField
                  id="outlined-name"
                  label="姓名"
                  value={appliciantname}
                  variant="outlined"
                  required
                  sx={{ width: "63ch" }}
                  onChange={(e) => setAppliciantname(e.target.value)}
                  name="name"
                />

                <TextField
                  label="聯絡電話"
                  variant="outlined"
                  placeholder="e.g. 12345678"
                  value={phoneNumb}
                  name="phoneNumb"
                  required
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  onChange={(e) => {
                    setPhoneNumb(e.target.value)
                  }}
                />

                <TextField
                  id="outlined-multiline-static"
                  variant="outlined"
                  label="物業地址"
                  value={address}
                  name="address"
                  multiline
                  rows={6}
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div className="estimForm4">
                  <div>
                    <p>回覆方式 *</p>
                    <div className="d-flex mb-3 align-items-center">
                      <Checkbox
                        checked={reply_phone}
                        onChange={(e) => {
                          setReply_phone(e.target.checked)
                        }}
                      />
                      <label className="ms-2 ">{checkbox_list2[0].text}</label>
                    </div>
                    <div className="d-flex mb-3 align-items-center ">
                      <Checkbox
                        checked={reply_wtsapp}
                        onChange={(e) => {
                          setReply_wtsapp(e.target.checked)
                        }}
                      />
                      <label className="ms-2 ">{checkbox_list2[1].text}</label>
                    </div>
                  </div>
                  <div className="mt-5 estim-submitbtn">
                    <SubmitButton
                      variant="contained"
                      onClick={ValidateData}
                      type="submit"
                    >
                      提交
                    </SubmitButton>
                    {isVerified && (
                      <label
                        style={{
                          color: "#c59b6d",
                          fontWeight: "bold",
                          fontSize: "18px",
                          marginLeft: "20px",
                        }}
                      >
                        成功提交!
                      </label>
                    )}
                  </div>
                </div>
              </Box>
            </div>
          </div>
        </form>
      )}
      {isMobile && (
        <form
          ref={formRef}
          onSubmit={(e) => sendEmail(e, formRef.current, "template_valuation")}
        >
          <input
            type="text"
            style={{ display: "none" }}
            name="checklist"
            defaultValue={checkList}
          ></input>
          <div className="estimForm-mob">
            <div className="estimForm1-mob mx-5 pb-3">
              <h2 className="pb-4">物業估價</h2>
              <p>
                為確保閣下的估價更準確，
                我們將根據五間估價機構作綜合評估，稍後將有專人回覆閣下。
              </p>
            </div>
            <div className="estimForm2 mx-5">
              <div className="d-flex mb-3">
                <Checkbox
                  checked={confirm1}
                  onChange={(e) => {
                    setConfirm1(e.target.checked)
                  }}
                />
                <label className="ms-2 ">
                  {content?.valuation?.otherRemark1}
                </label>
              </div>
              <div className="d-flex mb-3">
                <Checkbox
                  checked={confirm2}
                  onChange={(e) => {
                    setConfirm2(e.target.checked)
                  }}
                />
                <label className="ms-2 ">
                  {content?.valuation?.otherRemark2}
                </label>
              </div>
            </div>
            <div className="estimForm3-mob ">
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "80%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-name"
                  label="姓名"
                  value={appliciantname}
                  name="name"
                  variant="outlined"
                  required
                  sx={{ width: "63ch" }}
                  onChange={(e) => setAppliciantname(e.target.value)}
                />

                <TextField
                  label="聯絡電話"
                  variant="outlined"
                  placeholder="e.g. 12345678"
                  value={phoneNumb}
                  name="phoneNumb"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  onChange={(e) => {
                    setPhoneNumb(e.target.value)
                  }}
                />

                <TextField
                  id="outlined-multiline-static"
                  variant="outlined"
                  label="物業地址"
                  value={address}
                  name="address"
                  multiline
                  rows={6}
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div className="estimForm4">
                  <div>
                    <p style={{ textAlign: "left", paddingLeft: "10px" }}>
                      回覆方式 *
                    </p>
                    <div className="d-flex  align-items-center">
                      <Checkbox
                        checked={reply_phone}
                        onChange={(e) => {
                          setReply_phone(e.target.checked)
                        }}
                      />
                      <label className="ms-2 ">{checkbox_list2[0].text}</label>
                    </div>
                    <div className="d-flex  align-items-center ">
                      <Checkbox
                        checked={reply_wtsapp}
                        onChange={(e) => {
                          setReply_wtsapp(e.target.checked)
                        }}
                      />
                      <label className="ms-2 ">{checkbox_list2[1].text}</label>
                    </div>
                  </div>
                  <div className="mt-3 estim-submitbtn">
                    <SubmitButton
                      variant="contained"
                      onClick={ValidateData}
                      type="submit"
                    >
                      提交
                    </SubmitButton>
                    {isVerified && (
                      <label
                        style={{
                          color: "#c59b6d",
                          fontWeight: "bold",
                          fontSize: "18px",
                          marginLeft: "20px",
                        }}
                      >
                        成功提交!
                      </label>
                    )}
                  </div>
                </div>
              </Box>
            </div>
          </div>
        </form>
      )}
    </>
  )
}

export default EstimateForm
