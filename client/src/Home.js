import './home.css';
import HomeSection1 from './page_section/HomeSection1';
import { useEffect } from 'react';
import WhyChoose from './component/WhyChoose';
import HomeSection2 from './page_section/HomeSection2';
import HomeSection3 from './page_section/HomeSection3';
import Footer from './component/Footer';
import { Helmet } from 'react-helmet';
import HomeSection4 from './page_section/HomeSection4';
import HomeSection5 from './page_section/HomeSection5';
import homebg4 from './images/home/homebg4.png';
import css from './pages/home.module.css';
import EstimateForm from './component/EstimateForm';
import ApplicationForm from './component/ApplicationForm/ApplicationForm';

const Home = ({ content }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container">
      {/* <Helmet>
    <title>{content?.MT[0].metaTitle}</title>
    <meta name='description' content={content?.MT[0].metaDescription}/>
    <meta name='keywords' content={content?.MT[0].metaKeywords}/>
    </Helmet>       */}

      <div className="section1_container section1_bg">
        <HomeSection1 />
      </div>
      <div className="section2_container section2_bg">
        <HomeSection2 />
      </div>
      <div className="section3_container">
        <div className="d-flex justify-content-center">
          <p>
            可選擇透過網上平台完成整個貸款申請過程，
            <br />
            即時提取現金。
          </p>
        </div>
      </div>
      <div className="section4_container">
        <img src={homebg4} alt="" className="homebg4" />
        <HomeSection4 />
      </div>
      <div style={{ marginTop: '10rem' }}>
        <ApplicationForm />
      </div>

      <div className="section5_container section5_bg">
        <HomeSection5 />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
