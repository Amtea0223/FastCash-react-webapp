import '../balanceTransfer/balanceTransfer.css';
import HomeSection3 from '../page_section/HomeSection3';
import HomeSection5 from '../page_section/HomeSection5';
import PrivateLoanSection1 from '../page_section/PrivateLoanSection1';
import Banner from '../balanceTransfer/Banner';
import Footer from '../component/Footer';
import { Helmet } from 'react-helmet';
import bg from '../images/balancetransfer/balance_bg.jpg';
import ApplicationForm from '../component/ApplicationForm/ApplicationForm';

const BalanceTransfer = ({ content }) => {
  return (
    <div className="BalanceTransfer">
      <div className="BalanceTransfer-section1-container">
        <Banner name={'Balance Transfer'} name_ch={'結餘轉戶'} bg_url={bg} />
      </div>
      <div className="BalanceTransfer-section2-container">
        <PrivateLoanSection1
          title={
            '為客戶提供一個特快的「網上」貸款體驗。客人可選擇透過網上平台完成整個貸款申請過程，並即時提取現金。'
          }
          desc={
            '過往的信貸紀錄不會影響你的申請，私人貸款服務配合不同人士需要，申請貸款從未如此輕鬆簡單。我們為客戶提供全面的財務管理方案更可享低息及'
          }
        />
      </div>

      <div className="BalanceTransfer-section3_container section3_bg">
        <ApplicationForm />
      </div>
      <div className="BalanceTransfer-section4_container section5_bg">
        <HomeSection5 />
      </div>
      <Footer />
    </div>
  );
};

export default BalanceTransfer;
