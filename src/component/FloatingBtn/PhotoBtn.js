import phone_icon from "../../images/icon/phone_icon_white.png"
import "./photoBtn.css"
const PhotoBtn = () => {
  return (
    <div className="phoneBtn">
      <div className="phoneBtn-container">
        <a href="tel:9363-4203">
          <img src={phone_icon} className="phoneIcon" alt="" />
        </a>
      </div>
    </div>
  )
}

export default PhotoBtn
