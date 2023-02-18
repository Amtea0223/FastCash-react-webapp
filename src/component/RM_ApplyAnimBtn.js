import "./applyAnimBtn.css";
import applybtn from "../images/btn/applybtn.svg";
// import { motion } from "framer-motion";

const ApplyAnimBtn = ({ open }) => {
  return (
    <button className="applyAnimBtn" onClick={open}>
      <img src={applybtn} alt="" />
    </button>
  );
};

export default ApplyAnimBtn;
