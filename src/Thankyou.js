import "./component/applyForm.css";
import triangle from "./images/applicationForm/triangle.svg";
import step5_pic from "./images/applicationForm/step5.svg";
import finishApply_pic from "./images/applicationForm/finishApply.svg";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Helmet } from "react-helmet"

const StepButton = styled(Button)({
  backgroundColor: "#C59B6D",
  width: "180px",
  height: "50px",
  fontSize: "24px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#707070",
    color: "white",
  },
});

const Thankyou = ({content}) => {
  const step_title_list = [
    { step: 1, title: "1. 貸款目的" },
    { step: 2, title: "2. 支薪方式" },
    { step: 3, title: "3. 確認申請協議" },
    { step: 4, title: "4. 輸入貸款資料" },
    { step: 5, title: "5. 完成貸款申請" },
  ];
  const Step5Content = () => (
    <div className="step-content">
      <div className="step-finishApply">
        <img src={finishApply_pic} alt="" className="mb-5" />
        <p style={{ fontWeight: "bold", fontSize: "21px" }}>
          申請程序已經完成，
          <br />
          我們會盡快審批您的貸款申請。
        </p>
      </div>
    </div>
  );
  return (
    <div className="applyForm">
       <Helmet>
    <title>{content?.MT[12].metaTitle}</title>
    <meta name='description' content={content?.MT[12].metaDescription}/>
    <meta name='keywords' content={content?.MT[12].metaKeywords}/>
    </Helmet>
      <img className="applyForm-triangle" src={triangle} alt="" />
      <span
        style={{
          color: "#c59b6d",
          fontSize: "25px",
          marginBottom: "50px",
          fontWeight: "bold",
        }}
      >
        立即申請
      </span>
      <div className="applyForm-step-container">
        <div className="applyForm-step-left">
          <img className="applyForm-step-circle" src={step5_pic} alt="" />
          <div className="applyForm-step-title">
            {step_title_list.map((item) => (
              <p key={item.step}>{item.title}</p>
            ))}
          </div>
        </div>
        <div className="applyForm-step-right">
          <Step5Content />
        </div>
      </div>
      <StepButton variant="contained" href="/">
        返回主頁
      </StepButton>
      <div className="top-space"></div>
    </div>
  );
};

export default Thankyou;
