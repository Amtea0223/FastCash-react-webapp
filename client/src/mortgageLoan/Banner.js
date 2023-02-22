
import icon1 from "../images/mortgageLoan/icon1.png";
import icon2 from "../images/mortgageLoan/icon2.png";
import icon3 from "../images/mortgageLoan/icon3.png";

import "../component/banner.css";
const Banner = ({ name, name_ch, bg_url }) => {

const banner_style = {
  background: `url(${bg_url})`,
  backgroundSize:'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition:'center',
  width:'100%',
  height:'150vh',
}


  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-pic" style={banner_style}>
          <div className="banner-title">
            <div className="header" style={{ color: "#A2C43A" }}>
              {/* <span style={{color:"#A2C43A"}}> */}
              <h4>{name_ch}</h4>
              <div class="line"></div>
            </div>
            <div className="mortgage-banner-content">
              <div className="mortgage-banner-body">
                <div className="mortgage-banner-body-item">
                  <img src={icon1} alt=""></img>
                  <span>免入息證明</span>
                </div>
                <div className="mortgage-banner-body-item">
                  <img src={icon2} alt=""></img>
                  <span>免公司財務報表</span>
                </div>
                <div className="mortgage-banner-body-item">
                  <img src={icon3} alt=""></img>
                  <span>即時批核 24小時</span>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="banner-btn">
            <ApplicationBtn isBannerBtn={true} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
