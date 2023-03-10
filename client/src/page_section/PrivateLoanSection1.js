import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import './PrivateLoanSection.css';
import AppyBtn from '../component/ApplyBtn';
import square_bg from '../images/square_bg.png';
import applybtn_bg from '../images/applybtn_bg.png';
import { Link, useNavigate } from 'react-router-dom';

const ApplyButton = styled(Button)({
  color: '#FFF',
  backgroundColor: '#A2C43A',
  width: '166px',
  height: '71px',
  fontSize: '24px',
  fontWeight: 'bold',
  borderRadius: '22px',
  '&:hover': {
    backgroundColor: '#A2C43A',
  },
});

const ApplyArea = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/application');
  };
  return (
    <div className="applyArea-container">
      <div className="applyArea">
        <ApplyButton onClick={handleClick}>立即申請</ApplyButton>
      </div>
    </div>
  );
};

const PrivateLoanSection1 = ({ title, desc }) => {
  return (
    <div className="PrivateLoanSection1">
      <div className="PrivateLoanSection1-upper">
        <div className="PrivateLoanSection1-left">
          <div className="PrivateLoanSection1-left-header">
            <h4>{title} </h4>
          </div>
          <div className="PrivateLoanSection1-left-desc">
            <p>{desc}</p>
          </div>
        </div>
        <div className="PrivateLoanSection1-right">{ApplyArea()}</div>
      </div>
      <div className="PrivateLoanSection1-lower mt-5">
        {/* <img className="square" src={square_bg}/> */}
        <div className="PrivateLoanSection1-lower-word">
          <span>註: 根據《放債人條例》年利率最高不超過48%。</span>
          <span>供款期由6個月至個120月常見還款例子:</span>
          <span>
            年利率為28%情況下的貸款HK$10,000，還款期數12期，每期還款額為 HK$965
          </span>
        </div>
      </div>
    </div>
  );
};

export default PrivateLoanSection1;
