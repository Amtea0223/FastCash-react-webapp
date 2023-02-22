import "../mortgageLoan/mortgageLoan.css";
import HomeSection1 from "../page_section/HomeSection1";
import WhyChoose from "../component/WhyChoose";
import HomeSection2 from "../page_section/HomeSection2";
import HomeSection3 from "../page_section/HomeSection3";
import HomeSection5 from "../page_section/HomeSection5";
import PrivateLoanSection1 from "../page_section/PrivateLoanSection1";
import MortgageLoanSection1 from "../page_section/MortgageLoanSection1";
import MortgageLoanSection2 from "../page_section/MortgageLoanSection2";
import Banner from "../mortgageLoan/Banner";
import Footer from "../component/Footer";
import { Helmet } from "react-helmet";
import bg from "../images/mortgageLoan/bg.png";

const PrivateLoan = ({ content }) => {
  return (
    <div className="PrivateLoan">
      {/* <Helmet>
        <title>{content?.MT[0].metaTitle}</title>
        <meta name="description" content={content?.MT[0].metaDescription} />
        <meta name="keywords" content={content?.MT[0].metaKeywords} />
      </Helmet> */}
      <div className="MortgageLoan-section1-container">
        <Banner name={"Private Loan"} name_ch={"按揭及業主貸款"} bg_url={bg} />
      </div>
      <div className="MortgageLoan-section2-container">
        <PrivateLoanSection1 title={"為客戶提供「一按」、「二按」及「轉按」服務。相對銀行繁複的審批過程，我們的貸款計劃能為閣下提供彈性的貸款服務。"} desc={""}/>
      </div>
      <div className="MortgageLoan-section5-container">
        <MortgageLoanSection1/>
      </div>

      <div className="MortgageLoan-section6-container">
        <MortgageLoanSection2/>
      </div>

      <div className="MortgageLoan-section3_container section3_bg">
        <HomeSection3 content={content} />
      </div>
      <div className="MortgageLoan-section4_container section5_bg">
        <HomeSection5 />
      </div>
      <Footer />
    </div>
  );
};

export default PrivateLoan;
