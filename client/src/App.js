import React, { useEffect, useState } from "react"
import "./App.css"
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import useFetch from "./codeHelper/useFetch"
import AboutUs from "./AboutUs"
import NavBar from "./component/NavBar"
import Home from "./Home"
import LoanProcess from "./LoanProcess"
import LoanServices from "./LoanServices"
import HotTopics from "./HotTopics"
import FloatBtnList from "./component/FloatBtnList"
import Thankyou from "./Thankyou"
import TU from "./LoanServicesPages/TU"
import SmeLoan from "./LoanServicesPages/SmeLoan"
import PrivateLending from "./LoanServicesPages/PrivateLending"
import Mortgage from "./LoanServicesPages/Mortgage"
import Creditcard from "./LoanServicesPages/Creditcard"
import OnlineLoan from "./LoanServicesPages/OnlineLoan"
import PrivateLoan from "./PrivateLoan"
import MortgageLoan from "./mortgageLoan/MortgageLoan"

// import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import chatbot_icon from "./component/chatbot/chatbotman.png"

import ApplicationBtn from "./component/ApplicationBtn"
import Disclaimer from "./Disclaimer"
import Ordinance from "./Ordinance"
import ReactChatbot from "./component/chatbot/ReactChatbot"
import { ENV } from "./config"
import ApplyForm from "./component/ApplyForm"
import Application from "./component/Application/Application"


function App() {  
  const { data } = useFetch(ENV + "/api/v1/content")
  const post_result = useFetch(ENV + "/api/v1/post")
  const [showBottomNav, setShowBottomNav] = useState(true)

  const pathname = window.location.pathname;


  // const gtag_link = data?.MT[14].description    
  // const gtag_dataLayer = data?.MT[15].description  
  // useEffect(() => {
  //   const script = document.createElement("script")    
  //   script.async = true    
  //    script.src = gtag_link
  //   document.head.appendChild(script)
    
  //   const script2 = document.createElement("script")  
  //   script2.append = gtag_dataLayer
  //   document.head.appendChild(script2)

  //   return () => {
  //     document.head.removeChild(script)
  //     document.head.removeChild(script2)
  //   }
  // }, [gtag_link,gtag_dataLayer])

  
  return (
    <BrowserRouter> 
      <div className="App">
        {/* <ToastContainer autoClose={10000} hideProgressBar /> */}
        {/* <ReactChatbot /> */}
        {/* <FloatBtnList /> */}
        {/* {showBottomNav && (
          <ApplicationBtn
            isBottomNav={true}
            setShowBottomNav={setShowBottomNav}
          />
        )} */}
        <NavBar content={data} postData={post_result.data}   />
        {pathname === '/' ? null : <div className="top-space" />}
        {/* <div className="top-space"></div> */}
        <Routes>
          <Route exact path="/" element={<Home content={data}  />} />
          <Route
            exact
            path="/privateLoan"
            element={<PrivateLoan content={data} />}
          />
          {/* <Route
            exact
            path="/application/:content"
            element={<Application setShowBottomNav={setShowBottomNav} data={data} />}
          /> */}
          <Route
            exact
            path="/mortgage"
            element={<MortgageLoan content={data} />}
          />
          <Route
            exact
            path="/balance"
            element={<PrivateLoan content={data} />}
          />
          <Route
            exact
            path="/question"
            element={<PrivateLoan content={data} />}
          />
          <Route
            exact
            path="/about"
            element={<PrivateLoan content={data} />}
          />
          <Route
            exact
            path="/contact"
            element={<PrivateLoan content={data} />}
          />
          
          {/* <Route
            exact
            path="/loanservices"
            element={<LoanServices content={data} />}
          /> */}
          {/* <Route exact path="/loanprocess" element={<LoanProcess />} /> */}
          <Route exact path="/hottopics/:order/:title" element={<HotTopics content={data} postData ={post_result.data} />} />
          
          <Route exact path="/thankyou" element={<Thankyou content = {data} />} />
          <Route exact path="/disclaimer" element={<Disclaimer content={data} />} />
          <Route exact path="/ordinance" element={<Ordinance content = {data} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
