import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./PrivateLoanSection.css"

const ApplyButton = styled(Button)({
  backgroundColor: "#77BF27",
  width: "166px",
  height: "71px",
  fontSize: "24px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#707070",
  },
});

const PrivateLoanSection1 = ({ content }) => {
  return (
    <div className="PrivateLoanSection1">
      <div className="PrivateLoanSection1-left">
        <div className="PrivateLoanSection1-left-header">
          <h3>
            為客戶提供一個特快的「網上」貸款體驗。客人可選擇透過網上平台完成整個貸款申請過程，並即時提取現金。{" "}
          </h3>
        </div>
        <div className="PrivateLoanSection1-left-desc">
          <p>
            過往的信貸紀錄不會影響你的申請，私人貸款服務配合不同人士需要，申請貸款從未如此輕鬆簡單。我們為客戶提供全面的財務管理方案更可享低息及
          </p>
        </div>
      </div>
      <div className="PrivateLoanSection1-right">
        <ApplyButton variant="contained" type="submit">
          立即申請
        </ApplyButton>
      </div>
    </div>
  );
};

export default PrivateLoanSection1;
