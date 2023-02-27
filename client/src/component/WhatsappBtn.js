import "./whatsappBtn.css"
import icon from "../images/icon/whatsapp_icon.png"
const WhatsappBtn = () => {
  return (
    <div className="wtsapp">
      <div className="wtsapp-container">
        <a href="https://api.whatsapp.com/send/?phone=85212345678">
          <img className="wtsapp-icon" src={icon} alt="" />
        </a>
      </div>
    </div>
  )
}

export default WhatsappBtn
