import "./loanProcSection.css";
import Triangle from "../component/Triangle";
import TextField from "@mui/material/TextField";

const LoanProcSection3 = () => {
  return (
    <div className="loan-process-section">
      <div className="loan-process-section3-block">
        <div className="loan-process-section3">
          <Triangle />
          <div className="loan-application-title">立即申請</div>
          <div className="loan-application-steps">
            <div className="step-block move-right-step-block">
              <div className="application-agreement">1申請協議</div>
              <span className="box-right-triangle"></span>
            </div>
            <div className="step-block move-left-step-block">
              <span className="box-left-triangle"></span>
              <div className="loan-data">2貸款資料</div>
            </div>
          </div>
          <div className="loan-form-area">
            <div className="loan-application-text">
              請先填寫以下所需資料，讓我們可以加快審批過程。我們或有可能會聯絡閣下提供更多申請所需的資料。
            </div>
            <div className="loan-data-input">
              
              <TextField id="loan-apply-name" label="姓名" variant="outlined" required sx={{ width: "40ch", marginX: "30px" }}/>
              <TextField id="loan-apply-phone" label="聯絡電話" variant="outlined" required sx={{ width: "40ch" }}/>
            </div>
            <div className="loan-application-text">
              *本人已年滿18歲，閱讀並同意此網站上上的貸款細節及條款。本人明白和同意，在此申請表提供的個人資料將記錄與資料系統。本人明白Richmore
              Finance對貸款申請審批與否有絕對決定權，而毋需作出解釋。
            </div>
          </div>
          <button className="loan-submit-btn">下一步</button>
        </div>
      </div>
    </div>
  );
};

export default LoanProcSection3;
