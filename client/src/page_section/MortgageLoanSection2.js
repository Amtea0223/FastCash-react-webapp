import "./mortgageLoanSection.css";
import tick from "../images/mortgageLoan/tick.png";
import man from "../images/mortgageLoan/man.png";

const MortgageLoanSection2 = () => {
  return (
    <div className="MortgageLoanSection2">
      <div className="MortgageLoanSection2-left">
        <div className="MortgageLoanSection2-left-row">
          <div className="MortgageLoanSection2-left-row-item">
            <img src={tick} />
            <span>適合任何行業</span>
          </div>
          <div className="MortgageLoanSection2-left-row-item">
            <img src={tick} />
            <span>絕無隱藏費用</span>
          </div>
        </div>
        <div className="MortgageLoanSection2-left-row">
          <div className="MortgageLoanSection2-left-row-item">
          <img src={tick} />
            <span>貸款額高達8成</span>
          </div>
          <div className="MortgageLoanSection2-left-row-item">
          <img src={tick} />
            <span>提早還款免罰息</span>
          </div>
        </div>
        <div className="MortgageLoanSection2-left-row">
          <div className="MortgageLoanSection2-left-row-item">
          <img src={tick} />
            <span>千萬貸款 即日辦妥</span>
          </div>
        </div>
      </div>
      <div className="MortgageLoanSection2-right">
        <img src={man}/>
      </div>
    </div>
  );
};

export default MortgageLoanSection2;
