import "./mortgageLoanSection.css";
import family from "../images/mortgageLoan/family.png";


const MortgageLoanSection1 = () => {
  return (
    <div className="MortgageLoanSection1">
      <div className="MortgageLoanSection1-1">
        <div className="header">
          <h2>轉按</h2>
        </div>
        <div className="desc">
          <div className="title">
            <h4>
              「轉按」是指物業已在銀行或貸款機構承做按揭，而業主將該物業的按揭轉至另一銀行或貸款機構。
            </h4>
          </div>
          <div className="content">
            <h4>
              業主只需要提供原有按揭機構的貸款合約，為戶減少利息支出，大大減輕供款負擔。業主亦可藉著轉按套現繳付昂貴的咭數，便可考慮轉按來減輕咭數利息支出。
            </h4>
          </div>
        </div>
      </div>
      <div className="MortgageLoanSection1-2">
        <div className="MortgageLoanSection1-2-left">
          <div className="header">
            <h2>二按</h2>
          </div>
          <div className="desc">
            <div className="title">
              <h4>
                「二按」是指物業本身已在銀行或貸款機構做按揭並透過該物業再申請貸款。
              </h4>
            </div>
            <div className="content">
              <h4>
              業主可利用已做按揭物業，申請二按貸款，最高借足8成半或以上，免屋契，即日取款，為客戶靈活周轉。 我們的二按貸款計劃，可將已按的物業加按貸款，無需樓契抵押，透過簡單審查程序，利息特低。
              </h4>
            </div>
          </div>
        </div>
        <div className="MortgageLoanSection1-2-right">
            <img  className="MortgageLoanSection1-2-right-family" src={family}/>
        </div>
      </div>
      <div className="MortgageLoanSection1-3">
      <div className="header">
          <h2>一按</h2>
        </div>
        <div className="desc">
          <div className="title">
            <h4>
            「一按」是指物業新做的按揭，樓契需要用作抵押品給銀行或貸款機構。
            </h4>
          </div>
          <div className="content">
            <h4>
            任何物業不限種類及樓齡最高可借8成半或以上，免入息證明及繁複文件，即時電話批核，比銀行簡單快捷。如已擁有供滿按揭的物業，亦可透過我們的一按貸款計劃套現大額資金，以作資金周轉。相對銀行繁複的審批過程，我們的一按貸款計劃能為閣下提供彈性的貸款服務。
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageLoanSection1;
