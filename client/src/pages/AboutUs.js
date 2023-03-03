import css from "./aboutus.module.css";
import HomeSection5 from "../page_section/HomeSection5";
import Footer from "../component/Footer";
// import { Helmet } from "react-helmet";
import bg from "../images/aboutus/aboutus_bg.jpg";
import circle_logo from '../images/circle_logo.png';
import square from '../images/squaregp.png';



const AboutUs = ({ content }) => {
  return (
    <div className={css.container}>
      {/* <Helmet>
        <title>{content?.MT[0].metaTitle}</title>
        <meta name="description" content={content?.MT[0].metaDescription} />
        <meta name="keywords" content={content?.MT[0].metaKeywords} />
      </Helmet> */}
<img src={square} alt="" className={css.bg_square} />


    <div className={css.banner}>
      <h1>關於FAST CASH</h1>    
        
    </div>
 
    <div className={css.content}>
      <img src={circle_logo} alt="" width={"300px"} className="mb-5"/>      
      <h1>致力為客戶提供專業的多元化貸款服務</h1>      
      <h5>無論您所需的是資金周轉抑或業務拓展，我們團隊都會因應客戶不同需要提供靈活、貼心貸款方案，務求助您輕鬆應付各種財務需要，盡享便利資金周轉。</h5>
    </div>
      <HomeSection5 />
      <Footer />
    </div>
  );
};

export default AboutUs;
