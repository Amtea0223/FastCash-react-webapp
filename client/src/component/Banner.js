import ApplicationBtn from "./ApplicationBtn"
import "./banner.css"
const Banner = ({ name, name_ch, bg_url }) => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div style={{ background: `url(${bg_url})` }} className="banner-pic">
          <div className="top-space"></div>
          <div className="banner-title">
            <span>
              {name} <br />
              {name_ch}
            </span>
          </div>

          <div className="banner-btn">
            <ApplicationBtn isBannerBtn={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
