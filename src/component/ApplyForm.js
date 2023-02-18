import "./applyForm.css"
import { useState, useEffect, useRef } from "react"
import triangle from "../images/applicationForm/triangle.svg"
import step1_pic from "../images/applicationForm/step1.svg"
import step2_pic from "../images/applicationForm/step2.svg"
import step3_pic from "../images/applicationForm/step3.svg"
import step4_pic from "../images/applicationForm/step4.svg"
import step5_pic from "../images/applicationForm/step5.svg"

import person_pic from "../images/applicationForm/person.svg"
import home1_pic from "../images/applicationForm/home1.svg"
import home23_pic from "../images/applicationForm/home23.svg"
import cash_pic from "../images/applicationForm/cash.svg"
import transfer_pic from "../images/applicationForm/transfer.svg"
import cheques_pic from "../images/applicationForm/cheques.svg"
import house_pic from "../images/applicationForm/house.svg"
import building_pic from "../images/applicationForm/building.svg"
import finishApply_pic from "../images/applicationForm/finishApply.svg"

import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"
import Step3Content from "./ApplicationFormStep/Step3Content"
import Step4Content from "./ApplicationFormStep/Step4Content"
import { useNavigate } from "react-router-dom"
import moment from "moment"
import { ENV } from "../config"
import { sendEmail } from "./Email/SendEmail"
import { Helmet } from "react-helmet"

const ApplyForm = ({ setOpen, setShowBottomNav, content }) => {
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState(0)
  const step_pic_list = [step1_pic, step2_pic, step3_pic, step4_pic, step5_pic]

  const [choice1Color, setChoice1Color] = useState("#707070")
  const [choice2Color, setChoice2Color] = useState("#707070")
  const [choice3Color, setChoice3Color] = useState("#707070")
  const [choice4Color, setChoice4Color] = useState("#707070")
  const [choice5Color, setChoice5Color] = useState("#707070")

  const [step2choice1Color, setStep2Choice1Color] = useState("#707070")
  const [step2choice2Color, setStep2Choice2Color] = useState("#707070")
  const [step2choice3Color, setStep2Choice3Color] = useState("#707070")

  const [isNextStep, setIsNextStep] = useState(true)
  const [isPrevStep, setIsPrevStep] = useState(false)
  const [isApplyStep, setIsApplyStep] = useState(false)

  /*storage data*/
  const [step1Selected, setStep1Selected] = useState("")
  const [step2Selected, setStep2Selected] = useState("")
  const [appliciantName, setAppliciantName] = useState("")
  const [phoneNumb, setPhoneNumb] = useState("")
  const [loanAmount, setLoanAmount] = useState("")
  const [payPeriod, setPayPeriod] = useState(0)
  const [idCard, setIdCard] = useState("")
  const [isVerified, setIsVerified] = useState(false)

  const formRef = useRef()

  useEffect(() => {
    setShowBottomNav(false)
  }, [])

  const StepButton = styled(Button)({
    backgroundColor: "#C59B6D",
    width: "180px",
    height: "50px",
    fontSize: "24px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#707070",
    },
  })

  const handleSendEmailData = () => {
    return (
      <>
        <input
          type="text"
          style={{ display: "none" }}
          name="loan_reason"
          defaultValue={step1Selected}
        ></input>
        <input
          type="text"
          style={{ display: "none" }}
          name="pay_method"
          defaultValue={step2Selected}
        ></input>
        <input
          type="text"
          style={{ display: "none" }}
          name="name"
          defaultValue={appliciantName}
        ></input>
        <input
          type="text"
          style={{ display: "none" }}
          name="phone"
          defaultValue={phoneNumb}
        ></input>
        <input
          type="text"
          style={{ display: "none" }}
          name="loan_mount"
          defaultValue={loanAmount}
        ></input>
        <input
          type="text"
          style={{ display: "none" }}
          name="pay_period"
          defaultValue={payPeriod}
        ></input>
        <input
          type="text"
          style={{ display: "none" }}
          name="id_card"
          defaultValue={idCard}
        ></input>
      </>
    )
  }

  const handleSMSVerifytoNextStep = () => {
    if (!isVerified && activeStep === 2) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    switch (activeStep + 1) {
      case 1:
        setIsPrevStep(false)
        setIsNextStep(true)
        setIsApplyStep(false)
        break
      case 2:
        setIsPrevStep(true)
        setIsNextStep(true)
        setIsApplyStep(false)
        break
      case 3:
        setIsPrevStep(true)
        setIsNextStep(true)
        setIsApplyStep(false)
        break
      case 4:
        setIsPrevStep(true)
        setIsNextStep(false)
        setIsApplyStep(true)
        break
      case 5:
        setIsPrevStep(false)
        setIsNextStep(false)
        setIsApplyStep(false)
        break
      default:
        setIsPrevStep(false)
        setIsNextStep(true)
        setIsApplyStep(false)
        break
    }
    return () => {
      setIsNextStep(true)
      setIsPrevStep(false)
      setIsApplyStep(false)
    }
  }, [activeStep])

  const Step1Content = () => (
    <div className="step-content">
      <h4> 選擇你的貸款目的：</h4>
      <div className="step-content-choice">
        <div
          style={{ backgroundColor: choice1Color }}
          className="step-choice"
          onClick={() => {
            setChoice1Color("#c59b6d")
            setChoice2Color("#707070")
            setChoice3Color("#707070")
            setChoice4Color("#707070")
            setChoice5Color("#707070")
            setStep1Selected("無抵押業主貸款")
          }}
        >
          <img src={house_pic} alt="" />
          <div className="step-choice-text">
            <span>無抵押業主貸款</span>
          </div>
        </div>

        <div
          style={{ backgroundColor: choice2Color }}
          className="step-choice"
          onClick={() => {
            setChoice1Color("#707070")
            setChoice2Color("#c59b6d")
            setChoice3Color("#707070")
            setChoice4Color("#707070")
            setChoice5Color("#707070")
            setStep1Selected("物業一按")
          }}
        >
          <img src={home1_pic} alt="" />
          <div className="step-choice-text">
            <span>物業一按</span>
          </div>
        </div>
        <div
          style={{ backgroundColor: choice3Color }}
          className="step-choice"
          onClick={() => {
            setChoice1Color("#707070")
            setChoice2Color("#707070")
            setChoice3Color("#c59b6d")
            setChoice4Color("#707070")
            setChoice5Color("#707070")
            setStep1Selected("物業二按三按")
          }}
        >
          <img src={home23_pic} alt="" />
          <div className="step-choice-text">
            <span>物業二按、三按</span>
          </div>
        </div>
        <div
          style={{ backgroundColor: choice4Color }}
          className="step-choice"
          onClick={() => {
            setChoice1Color("#707070")
            setChoice2Color("#707070")
            setChoice3Color("#707070")
            setChoice4Color("#c59b6d")
            setChoice5Color("#707070")
            setStep1Selected("私人貸款")
          }}
        >
          <img src={person_pic} alt="" />
          <div className="step-choice-text">
            <span>私人貸款</span>
          </div>
        </div>
        <div
          style={{ backgroundColor: choice5Color }}
          className="step-choice"
          onClick={() => {
            setChoice1Color("#707070")
            setChoice2Color("#707070")
            setChoice3Color("#707070")
            setChoice4Color("#707070")
            setChoice5Color("#c59b6d")
            setStep1Selected("中小企貸款")
          }}
        >
          <img src={building_pic} alt="" />
          <div className="step-choice-text">
            <span>中小企貸款</span>
          </div>
        </div>
      </div>
    </div>
  )

  const Step2Content = () => (
    <div className="step-content">
      <h4> 選擇你的支薪方式：</h4>
      <div
        style={{ backgroundColor: step2choice1Color }}
        className="step-choice mt-5"
        onClick={() => {
          setStep2Choice1Color("#c59b6d")
          setStep2Choice2Color("#707070")
          setStep2Choice3Color("#707070")
          setStep2Selected("現金")
        }}
      >
        <img src={cash_pic} alt="" />
        <div className="step-choice-text">
          <span>現金</span>
        </div>
      </div>

      <div
        style={{ backgroundColor: step2choice2Color }}
        className="step-choice"
        onClick={() => {
          setStep2Choice1Color("#707070")
          setStep2Choice2Color("#c59b6d")
          setStep2Choice3Color("#707070")
          setStep2Selected("自動轉帳")
        }}
      >
        <img src={transfer_pic} alt="" />
        <div className="step-choice-text">
          <span>自動轉帳</span>
        </div>
      </div>
      <div
        style={{ backgroundColor: step2choice3Color }}
        className="step-choice"
        onClick={() => {
          setStep2Choice1Color("#707070")
          setStep2Choice2Color("#707070")
          setStep2Choice3Color("#c59b6d")
          setStep2Selected("支票")
        }}
      >
        <img src={cheques_pic} alt="" />
        <div className="step-choice-text">
          <span>支票</span>
        </div>
      </div>
    </div>
  )

  const Step5Content = () => (
    <div className="step-content">
      <div className="step-finishApply">
        <img src={finishApply_pic} alt="" className="mb-5" />
        <p>
          申請程序已經完成，
          <br />
          我們會盡快審批您你的貸款申請。
        </p>
      </div>
    </div>
  )

  const step_pic_src = (i) => {
    return step_pic_list[i]
  }

  const step_title_list = [
    { step: 1, title: "1. 貸款目的" },
    { step: 2, title: "2. 支薪方式" },
    { step: 3, title: "3. 確認申請協議" },
    { step: 4, title: "4. 輸入貸款資料" },
    { step: 5, title: "5. 完成貸款申請" },
  ]

  const step_content_list = [
    { step: 1, content: <Step1Content /> },
    { step: 2, content: <Step2Content /> },
    {
      step: 3,
      content: (
        <Step3Content
          setAppliciantName={setAppliciantName}
          setPhoneNumb={setPhoneNumb}
          appliciantName={appliciantName}
          phoneNumb={phoneNumb}
          isVerified={setIsVerified}
        />
      ),
    },
    {
      step: 4,
      content: (
        <Step4Content
          setLoanAmount={setLoanAmount}
          setPayPeriod={setPayPeriod}
          setIdCard={setIdCard}
          loanAmount={loanAmount}
          payPeriod={payPeriod}
          idCard={idCard}
        />
      ),
    },
    { step: 5, content: <Step5Content /> },
  ]

  //send Data
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name: appliciantName,
      isChatBot: false,
      reason: step1Selected,
      paymethod: step2Selected,
      phone: phoneNumb,
      loanAmount: loanAmount,
      paymentPeriod: payPeriod,
      idCard: idCard,
      timestamp: moment()
        .utcOffset(8)
        .format("YYYY-MM-DD HH:mm:ss"),
    }

    fetch(ENV + "/api/v1/application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          setIsVerified(true)
          navigate("/thankyou")
        }
      })
      .catch((err) => {
        console.log(err.message)
      })
      .finally(() => {})
  }

  const ValidateData = (e) => {
    e.preventDefault()
    switch (activeStep + 1) {
      case 1:
        if (step1Selected !== "") {
          setActiveStep(activeStep + 1)
        } else {
          alert("請選擇貸款目的")
        }
        break
      case 2:
        if (step2Selected !== "") {
          setActiveStep(activeStep + 1)
        } else {
          alert("請選擇你的支薪方式")
        }
        break
      case 3:
        // setIsVerified(true) //uat
        if (isVerified) {
          setActiveStep(activeStep + 1)
        } else {
          alert("請輸入電話號碼進行驗證")
        }

        break
      case 4:
        if (loanAmount !== "" && payPeriod !== 0 && idCard !== "") {
          // setActiveStep(activeStep + 1);
          handleSubmit(e)
          setOpen(false)
          sendEmail(e, formRef.current, "template_application")
          navigate("/thankyou")
        } else {
          alert("請填寫資料")
        }
        break

      default:
        break
    }
  }

  return (
    <>
      <Helmet>
        <title>{content?.MT[9].metaTitle}</title>
        <meta name="description" content={content?.MT[9].metaDescription} />
        <meta name="keywords" content={content?.MT[9].metaKeywords} />
      </Helmet>
      <div className="applyForm">
        <img className="applyForm-triangle" src={triangle} alt="" />
        <span
          style={{
            color: "#c59b6d",
            fontSize: "25px",
            marginBottom: "50px",
            fontWeight: "bold",
          }}
        >
          立即申請
        </span>
        <div className="applyForm-step-container">
          <div className="applyForm-step-left">
            <img
              className="applyForm-step-circle"
              src={step_pic_src(activeStep)}
              alt=""
            />
            <div className="applyForm-step-title">
              {step_title_list.map((item) => (
                <p key={item.step}>{item.title}</p>
              ))}
            </div>
          </div>
          <div className="applyForm-step-right">
            {step_content_list[activeStep].content}
          </div>
        </div>
        <div className="applyForm-stepBtn">
          {isPrevStep && (
            <StepButton
              variant="contained"
              onClick={() => {
                setActiveStep(activeStep - 1)
              }}
            >
              上一步
            </StepButton>
          )}
          {isNextStep && (
            <StepButton
              variant="contained"
              onClick={ValidateData}
              disabled={handleSMSVerifytoNextStep()}
            >
              下一步
            </StepButton>
          )}

          <form ref={formRef}>
            {handleSendEmailData()}
            {isApplyStep && (
              <StepButton
                variant="contained"
                onClick={(e) => {
                  ValidateData(e)
                }}
                type="submit"
              >
                申請貸款
              </StepButton>
            )}
          </form>
        </div>
      </div>
    </>
  )
}

export default ApplyForm
