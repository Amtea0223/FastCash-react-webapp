import './applyAnimBtn.css';
import applybtn from '../images/btn/btn_Component.png';
import { color, margin } from '@mui/system';
// import { motion } from "framer-motion";

const ApplyAnimBtn = ({ open }) => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src={applybtn}
        alt=""
        style={{ width: '30%', height: '20%', marginTop: '10px' }}
      />
      <button
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          color: 'white',
          fontSize: '24px',
        }}
        className="applyAnimBtn"
        onClick={open}
      >
        立即申請
      </button>
    </div>
  );
};

export default ApplyAnimBtn;
