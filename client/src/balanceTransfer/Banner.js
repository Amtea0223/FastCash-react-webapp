import icon1 from '../images/balancetransfer/bt_icon1.png';
import icon2 from '../images/balancetransfer/bt_icon2.png';
import icon3 from '../images/balancetransfer/bt_icon3.png';
import icon4 from '../images/balancetransfer/bt_icon4.png';

import '../component/banner.css';
import BannerSquare from '../component/BannerSquare/BannerSquare';
const Banner = ({ name, name_ch, bg_url }) => {
  const banner_style = {
    background: `url(${bg_url})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '95vh',
    clipPath: 'polygon(0 0, 100% 1%, 100% 56%, 0 83%)',
  };

  const data = [
    {
      icon: icon1,
      text: '彈性靈活',
      text2: '隨意自選，想點清? 自己揀',
    },
    {
      icon: icon2,
      text: '省時方便',
      text2: '不限一筆清貸款額，即日取款',
    },
    {
      icon: icon3,
      text: '專業快捷',
      text2: '專業分析客戶需求，即時提供多項方案',
    },
    {
      icon: icon4,
      text: '集中還款',
      text2: '一筆清最高達月薪10倍',
    },
  ];

  return (
    <div className="balance-banner">
      <div className="balance-banner-container">
        <div className="balance-banner-pic" style={banner_style}>
          <BannerSquare
            header={name_ch}
            data={data}
            width={'30rem'}
            height={'29rem'}
            top={'10rem'}
          />

          {/* <div className="balance-banner-title">
            <div className="balance-header" style={{ color: '#A2C43A' }}>
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
