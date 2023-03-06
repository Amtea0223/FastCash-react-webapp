import './homeSection.css';
import istockman from '../images/home/home_istockphoto.png';
import icon1 from '../images/icon/calculator_white.png';
import icon2 from '../images/icon/house_white.png';
import icon3 from '../images/icon/dollar_white.png';
import image3 from '../images/balancetransfer/balance_bg.jpg';
import image2 from '../images/home/home_istockphoto.png';
import image1 from '../images/privateLoan/bg.jpg';
import { Routes, Route, useNavigate } from 'react-router-dom';
import knowmore from '../images/btn/knowmore.png';
import { useState, useEffect } from 'react';

const light = '#C9E575';
const dark = '#83954E';

const HomeSection5 = () => {
  const navigate = useNavigate();

  const [tabInput, setTabInput] = useState('1');
  const [header, setHeader] = useState('');
  const [content, setContent] = useState('');
  const [link, setLink] = useState('');

  const [pic, setPic] = useState('');
  const [bg1, setBg1] = useState(dark);
  const [bg2, setBg2] = useState(light);
  const [bg3, setBg3] = useState(light);

  const img1 = '../images/home-private-3.png';

  const handleNavigate = () => {
    navigate(link);
  };

  const info = () => (
    <div className="section5-main-word">
      <h4>{header}</h4>
      <p>{content}</p>

      <div className="section5-main-btn" onClick={handleNavigate}>
        <img src={knowmore}></img>
        <p>了解更多</p>
      </div>
    </div>
  );

  const tabpic = () => (
    <div className="section5-main-img">
      <img src={pic} alt=""></img>
    </div>
  );

  const handleChangeTab = () => {
    if (tabInput == '1') {
      setBg1(dark);
      setBg2(light);
      setBg3(light);
      setHeader('私人貸款');
      setContent(
        '卡數、貸款、透支集中處理，按還款能力制定還款年期更輕鬆，餘額可自由運用。'
      );
      setLink('/privateLoan');

      setPic(image1);
    } else if (tabInput == '2') {
      setBg1(light);
      setBg2(dark);
      setBg3(light);
      setHeader('按揭及業主貸款');
      setContent(
        '為客戶提供「一按」、「二按」及「轉按」服務。相對銀行繁複的審批過程，我們的貸款計劃能為閣下提供彈性的貸款服務。'
      );
      setLink('/mortgage');
      setPic(image2);
    } else if (tabInput == '3') {
      setBg1(light);
      setBg2(light);
      setBg3(dark);
      setHeader('結餘轉戶');
      setContent(
        '卡數、貸款、透支集中處理，按還款能力制定還款年期更輕鬆，餘額可自由運用。'
      );
      setPic(image3);
      setLink('/balance');
    }
  };

  useEffect(() => {
    handleChangeTab();
  }, [tabInput]);

  return (
    <div className="home-section5">
      <div className="home-section5-container">
        <div className="section5-tab-row">
          <div
            className="section5-tab"
            style={{ background: bg1, cursor: 'pointer' }}
            onClick={() => {
              setTabInput('1');
            }}
          >
            <img src={icon1} alt="" />
            <span>私人貸款</span>
          </div>
          <div className="section5-space"></div>
          <div
            className="section5-tab"
            style={{ background: bg2, cursor: 'pointer' }}
            onClick={() => {
              setTabInput('2');
            }}
          >
            <img src={icon2} alt="" />
            <span>按揭及業主貸款</span>
          </div>
          <div className="section5-space"></div>
          <div
            className="section5-tab"
            style={{ background: bg3, cursor: 'pointer' }}
            onClick={() => {
              setTabInput('3');
            }}
          >
            <img src={icon3} alt="" />
            <span>結餘轉戶</span>
          </div>
        </div>
        <div className="section5-main section5_main_bg">
          <div className="section5-main-container">
            <div className="section5-main-content">
              {tabpic()}
              {/* <div className="section5-main-img">
              <img src={couple} alt=""></img>
            </div> */}
              <div className="section5-main-content-right">{info()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection5;
