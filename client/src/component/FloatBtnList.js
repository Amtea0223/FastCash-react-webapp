import ReactChatbot from "./chatbot/ReactChatbot"
import FbBtn from "./FbBtn"
import "./floatBtnlist.css"
import PhotoBtn from "./FloatingBtn/PhotoBtn"
import WhatsappBtn from "./WhatsappBtn"

const FloatBtnList = () => {
  return (
    <div className="floatBtnList">
      <div className="floatBtnList-item">
        <PhotoBtn />
      </div>
      <div className="floatBtnList-item">
        <WhatsappBtn />
      </div>
      <div className="floatBtnList-item">
        <FbBtn />
      </div>
      {/* <div className="floatBtnList-item">
        <ReactChatbot />
      </div> */}
    </div>
  )
}

export default FloatBtnList
