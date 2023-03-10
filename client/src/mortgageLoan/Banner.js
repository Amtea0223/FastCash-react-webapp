import icon1 from '../images/mortgageLoan/icon1.png';
import icon2 from '../images/mortgageLoan/icon2.png';
import icon3 from '../images/mortgageLoan/icon3.png';

import '../component/banner.css';
import BannerSquare from '../component/BannerSquare/BannerSquare';
const Banner = ({ name, name_ch, bg_url }) => {
  const banner_style = {
    backgroundImage: `url(${bg_url})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: '95vh',
    clipPath: 'polygon(0 0, 100% 1%, 100% 56%, 0 83%)',
  };

  const data = [
    {
      icon: icon1,
      text: '免入息證明',
    },
    {
      icon: icon2,
      text: '免公司財務報表',
    },
    {
      icon: icon3,
      text: '即時批核 24小時',
    },
  ];

  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-pic" style={banner_style}>
          <BannerSquare header={name_ch} data={data} test={icon1} />

          {/* <div
            className="banner-title"
            style={{
              backgroundColor: 'rgb(255 255 255 / 54%) !important',
              width: '594px',
            }}
          >
            <div className="header" style={{ color: '#A2C43A' }}>
              <h1>{name_ch}</h1>
              <div className="line"></div>
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
          </div> */}

          {/* <div className="banner-btn">
            <ApplicationBtn isBannerBtn={true} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
