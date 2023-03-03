import "./fbBtn.css"
import fbBtn from "../images/icon/facebook.png"
const FbBtn = () => {
  return (
    <div className="fbBtn">
      <a href="https://www.facebook.com/">
        <img src={fbBtn} alt="" />
      </a>
    </div>
  )
}

export default FbBtn
