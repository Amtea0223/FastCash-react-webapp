import css from "./contact.module.css";
import HomeSection5 from "../page_section/HomeSection5";
import Footer from "../component/Footer";
// import { Helmet } from "react-helmet";
import bg from "../images/contact/contact_us.jpg";
import circle_logo from "../images/circle_logo.png";
import square from "../images/squaregp.png";
import InquiryForm from "../component/InquiryForm/InquiryForm";

const Contact = ({ content }) => {
  return (
    <div className={css.container}>
      {/* <Helmet>
        <title>{content?.MT[0].metaTitle}</title>
        <meta name="description" content={content?.MT[0].metaDescription} />
        <meta name="keywords" content={content?.MT[0].metaKeywords} />
      </Helmet> */}
      <img src={square} alt="" className={css.bg_square} />
      <div className={css.banner}>
        <h1>聯絡我們</h1>
        {/* <img src={bg} alt="" width={"100%"} /> */}
      </div>

      <div className={css.content}>
        <div className={css.content_container}>
          <div>
            <h1>與我們聯絡</h1>
            <h5>
              如有任何貸款計劃查詢，歡迎填寫以下表格聯絡，或致電客戶服務熱線
              2887 7002。
            </h5>
          </div>
          <InquiryForm />
        </div>
      </div>

      <HomeSection5 />
      <Footer />
    </div>
  );
};

export default Contact;
