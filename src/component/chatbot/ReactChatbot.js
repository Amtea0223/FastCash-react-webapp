import { useEffect, useState } from "react"
import ChatBot from "react-simple-chatbot"
import { ThemeProvider } from "styled-components"
import "./reactChatbot.css"
import chatbot_icon from "./chatbotman.png"
import moment from "moment"
import { ENV } from "../../config"

import ChatbotSMSVerify from "./ChatbotSMSVerify"
import { auth } from "../../firebase"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"

const ReactChatbot = () => {
  const [opened, setOpened] = useState(false)

  //send data
  const handleSubmit = (value) => {
    const data = {
      name: value[3],
      isChatBot: true,
      reason: value[1],
      paymethod: value[2],
      phone: value[4],
      loanAmount: value[5],
      paymentPeriod: value[6],
      idCard: value[7],
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
          console.log("finish!!!")
        }
      })
      .catch((err) => {
        console.log(err.message)
      })
      .finally(() => {})
  }

  const toggleFloating = () => {
    setOpened(!!!opened)
  }

  function FloatingBtn() {
    return <img src={chatbot_icon} alt="" width="50px" />
  }

  const submitButtonStyle = {
    backgroundColor: "#FAAF3B",
  }
  const theme = {
    background: "#f5f8fb",
    // fontFamily: "Helvetica Neue",
    headerBgColor: "#FAAF3B",
    headerFontColor: "#FFFFFF",
    headerFontSize: "15px",
    botBubbleColor: "#EBEBEB",
    botFontColor: "#000000",
    userBubbleColor: "#faaf3b",
    userFontColor: "#FFFFFF",
  }

  const steps = [
    {
      id: "1",
      message:
        "你好！歡迎使用Richmore Finance Online貸款！我係Richmore Bot~我哋有免TU 免露面網上貸款，絕不審查信貸紀錄，15分鐘極速批核，全程無需露面。",
      trigger: "2",
    },
    {
      id: "2",
      message: "不如依家做個網上申請，即刻睇批核結果!",
      trigger: "start",
    },
    {
      id: "start",
      options: [{ value: "apply_start", label: "立即申請", trigger: "3" }],
    },
    {
      id: "3",
      message: "請問您嘅貸款目的係？",
      trigger: "4",
    },
    {
      id: "4",
      options: [
        { value: "無抵押業主貸款", label: "無抵押業主貸款", trigger: "5" },
        { value: "物業一按", label: "物業一按", trigger: "5" },
        { value: "物業二按、三按", label: "物業二按、三按", trigger: "5" },
        { value: "私人貸款", label: "私人貸款", trigger: "5" },
        { value: "中小企貸款", label: "中小企貸款", trigger: "5" },
      ],
    },
    {
      id: "5",
      message: "請問您嘅支薪方式係？",
      trigger: "6",
    },
    {
      id: "6",
      options: [
        { value: "現金", label: "現金", trigger: "7" },
        { value: "自動轉帳", label: "自動轉帳", trigger: "7" },
        { value: "支票", label: "支票", trigger: "7" },
      ],
    },
    {
      id: "7",
      message:
        "為咗可以加快審批過程，我哋可能會聯絡您提供更多申請所需嘅資料。麻煩您輸入身份證上嘅姓名丫~",
      trigger: "8",
    },
    {
      id: "8",
      user: true,
      trigger: "9",
    },
    {
      id: "9",
      message: "請輸入電話號碼進行驗證",
      trigger: "10",
    },
    {
      id: "10",
      user: true,
      validator: (value) => {
        if (/^[^0-3][0-9]{7}/.test(value)) {
          return true
        } else {
          return "請輸入正確號碼"
        }
      },
      trigger: "sendOTP",
    },
    {
      id: "sendOTP",
      replace: true,
      component: <ChatbotSMSVerify />,
      waitAction: true,
      // trigger: "11",
    },
    {
      id: "11",
      message: "電話驗證成功!",
      trigger: "12",
    },
    {
      id: "12",
      message: "差唔多完成申請喇!  請問您嘅麻煩您畀一畀貸款金額我哋丫",
      trigger: "13",
    },
    {
      id: "13",
      user: true,
      validator: (value) => {
        if (isNaN(value)) {
          return "value should be a number"
        }
        return true
      },
      trigger: "14",
    },
    {
      id: "14",
      message: "諗住供幾多個月呢？",
      trigger: "15",
    },
    {
      id: "15",
      options: [
        { value: "12", label: "12個月", trigger: "16" },
        { value: "24", label: "24個月", trigger: "16" },
        { value: "36", label: "36個月", trigger: "16" },
        { value: "48", label: "48個月", trigger: "16" },
        { value: "60", label: "60個月", trigger: "16" },
      ],
    },
    {
      id: "16",
      message: "最後唔該您畀身份證號碼我哋丫~",
      trigger: "17",
    },
    {
      id: "17",
      user: true,
      trigger: "apply_end",
    },
    {
      id: "apply_end",
      message: "多謝您！申請程序已經搞掂喇，我哋會盡快審批您嘅貸款申請！",
      end: true,
    },
  ]

  const handleEnd = ({ steps, values }) => {
    // console.log(steps)
    // console.log(values)
    handleSubmit(values)
  }

  return (
    <div className="chat__bot">
      <ThemeProvider theme={theme}>
        <ChatBot
          handleEnd={handleEnd}
          steps={steps}
          floating={true}
          opened={opened}
          toggleFloating={toggleFloating}
          headerTitle={"線上申請"}
          botAvatar={chatbot_icon}
          submitButtonStyle={submitButtonStyle}
          floatingIcon={FloatingBtn()}
          placeholder={"輸入您的信息"}
        />
      </ThemeProvider>
    </div>
  )
}

export default ReactChatbot
