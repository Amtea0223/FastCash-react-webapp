import { Button } from "react-bootstrap";
import bg from "../images//applybtn_bg.png";
import "./applyBtn.css";

const ApplyBtn = () => {
  const pic_style = {
    background: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="apply-btn-container" style={{position:"relative"}}>
      <div className="apply-btn-pic"></div>
      <div className="apply-btn">
        <Button variant="contained" type="submit">
          立即申請
        </Button>
      </div>
    </div>
  );
};

export default ApplyBtn;

