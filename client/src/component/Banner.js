import ApplicationBtn from "./ApplicationBtn";
import icon1 from "../images/privateLoan/icon1.png";
import icon2 from "../images/privateLoan/icon2.png";
import icon3 from "../images/privateLoan/icon3.png";
import icon4 from "../images/privateLoan/icon4.png";

import "./banner.css";
const Banner = ({ name, name_ch, bg_url }) => {

const banner_style = {
  background: `url(${bg_url})`,
  backgroundSize:'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPositionY: '82%',
  width:'100%',
  height: "94vh",
  clipPath:"polygon(0 0, 100% 1%, 100% 56%, 0 83%)",
}


  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-pic" style={banner_style}>
          <div className="banner-title">
            <div className="header" style={{ color: "#A2C43A" }}>
              {/* <span style={{color:"#A2C43A"}}> */}
              <h1>{name_ch}</h1>
              <div className="line"></div>
            </div>
            <div className="banner-content">
              <div className="body">
                <div className="item">
                  <img src={icon1} alt="" ></img>
                  <span>申請費用全免</span>
                </div>
                <div className="item">
                  <img src={icon2} alt=""></img>
                  <span>還款期長達48個月</span>
                </div>
              </div>
              <div className="body">
                <div className="item">
                  <img src={icon3} alt=""></img>
                  <span>貸款額高達月薪10倍</span>
                </div>
                <div className="item">
                  <img src={icon4} alt=""></img>
                  <span>最快 30分鐘現金到手</span>
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
