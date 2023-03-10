import ApplicationBtn from './ApplicationBtn';
import icon1 from '../images/privateLoan/icon1.png';
import icon2 from '../images/privateLoan/icon2.png';
import icon3 from '../images/privateLoan/icon3.png';
import icon4 from '../images/privateLoan/icon4.png';

import './banner.css';
import BannerSquare from './BannerSquare/BannerSquare';
const Banner = ({ name, name_ch, bg_url }) => {
  const banner_style = {
    background: `url(${bg_url})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: '82%',
    width: '100%',
    height: '94vh',
    clipPath: 'polygon(0 0, 100% 1%, 100% 56%, 0 83%)',
  };

  const data = [
    {
      icon: icon1,
      text: '申請費用全免',
    },
    {
      icon: icon2,
      text: '還款期長達48個月',
    },
    {
      icon: icon3,
      text: '貸款額高達月薪10倍',
    },
    {
      icon: icon4,
      text: '最快30分鐘現金到手',
    },
  ];

  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-pic" style={banner_style}></div>
        <BannerSquare header={name_ch} data={data} />
      </div>
    </div>
  );
};

export default Banner;
