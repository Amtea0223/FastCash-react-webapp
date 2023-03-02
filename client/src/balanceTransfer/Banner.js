import icon1 from "../images/balancetransfer/bt_icon1.png";
import icon2 from "../images/balancetransfer/bt_icon2.png";
import icon3 from "../images/balancetransfer/bt_icon3.png";
import icon4 from "../images/balancetransfer/bt_icon4.png";

import "../component/banner.css";
const Banner = ({ name, name_ch, bg_url }) => {

const banner_style = {
  background: `url(${bg_url})`,
  backgroundSize:'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition:'center',
  width:'100%',
  height: "95vh",
  clipPath:"polygon(0 0, 100% 1%, 100% 56%, 0 83%)",
}


  return (
    <div className="balance-banner">
      <div className="balance-banner-container">
        <div className="balance-banner-pic" style={banner_style}>
          <div className="balance-banner-title">
            <div className="balance-header" style={{ color: "#A2C43A" }}>
              {/* <span style={{color:"#A2C43A"}}> */}
              <h1>{name_ch}</h1>
              <div className="balance-line"></div>
            </div>
            <div className="balance-banner-content">
              <div className="balance-body">
                <div className="balance-item">
                  <img src={icon1} alt=""></img>
                  <span className="balance-item-title">彈性靈活</span>
                  <span>隨意自選，想點清? 自己揀</span>
                </div>
                <div className="balance-item">
                  <img src={icon2} alt=""></img>
                  <span className="balance-item-title">省時方便</span>
                  <span>不限一筆清貸款額，即日取款</span>
                </div>
              </div>
              <div className="balance-body">
                <div className="balance-item">
                  <img src={icon3} alt=""></img>
                  <span className="balance-item-title">專業快捷</span>
                  <span>專業分析客戶需求，即時提供多項方案。</span>
                </div>
                <div className="balance-item">
                  <img src={icon4} alt=""></img>
                  <span className="balance-item-title">集中還款</span>
                  <span>一筆清最高達月薪10倍</span>
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
