import "./privateLoan.css";
import HomeSection1 from "./page_section/HomeSection1";
import WhyChoose from "./component/WhyChoose";
import HomeSection2 from "./page_section/HomeSection2";
import HomeSection3 from "./page_section/HomeSection3";
import HomeSection5 from "./page_section/HomeSection5";
import PrivateLoanSection1 from "./page_section/PrivateLoanSection1";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import { Helmet } from "react-helmet";
import bg from "./images/privateLoan/bg.png";
import square from './images/squaregp.png';

const PrivateLoan = ({ content }) => {
  return (
    <div className="PrivateLoan">
      {/* <Helmet>
        <title>{content?.MT[0].metaTitle}</title>
        <meta name="description" content={content?.MT[0].metaDescription} />
        <meta name="keywords" content={content?.MT[0].metaKeywords} />
      </Helmet> */}
      <img src={square} alt="" className="square-group" />
      <div className="PrivateLoan-section1-container">
        <Banner name={"Private Loan"} name_ch={"私人貸款"} bg_url={bg} />
      </div>
      <div className="section2-container">
        <PrivateLoanSection1 title={"為客戶提供一個特快的「網上」貸款體驗。客人可選擇透過網上平台完成整個貸款申請過程，並即時提取現金。"} desc={"過往的信貸紀錄不會影響你的申請，私人貸款服務配合不同人士需要，申請貸款從未如此輕鬆簡單。我們為客戶提供全面的財務管理方案更可享低息及"}/>
      </div>

      <div className="section3_container section3_bg">
        <HomeSection3 content={content} />
      </div>
      <div className="section4_container section5_bg">
        <HomeSection5 />
      </div>
      <Footer />
    </div>
  );
};

export default PrivateLoan;
