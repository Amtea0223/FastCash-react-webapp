import css from "./application.module.css";
import Footer from "../component/Footer";
// import { Helmet } from "react-helmet";
import bg from "../images/contact/contact_us.jpg";
import circle_logo from "../images/circle_logo.png";
import square from "../images/squaregp.png";
import InquiryForm from "../component/InquiryForm/InquiryForm";
import HomeSection3 from "../page_section/HomeSection3";

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
        <h1>立即申請</h1>
        {/* <img src={bg} alt="" width={"100%"} /> */}
      </div>
        <HomeSection3 content={content} />
      <Footer />
    </div>
  );
};

export default Contact;
