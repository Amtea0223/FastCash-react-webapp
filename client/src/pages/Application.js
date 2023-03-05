import css from './application.module.css';
import Footer from '../component/Footer';
// import { Helmet } from "react-helmet";
import bg from '../images/contact/contact_us.jpg';
import circle_logo from '../images/circle_logo.png';
import InquiryForm from '../component/InquiryForm/InquiryForm';
import HomeSection3 from '../page_section/HomeSection3';
import { useEffect } from 'react';
import ApplicationForm from '../component/ApplicationForm/ApplicationForm';

const Contact = ({ content }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={css.container}>
      {/* <Helmet>
        <title>{content?.MT[0].metaTitle}</title>
        <meta name="description" content={content?.MT[0].metaDescription} />
        <meta name="keywords" content={content?.MT[0].metaKeywords} />
      </Helmet> */}
      <div style={{ marginTop: '5rem', marginBottom: '5rem' }}>
        <ApplicationForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
