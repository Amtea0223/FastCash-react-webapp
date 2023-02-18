import "./home.css"
import HomeSection1 from "./page_section/HomeSection1"
import WhyChoose from "./component/WhyChoose"
import HomeSection2 from "./page_section/HomeSection2"
import HomeSection3 from "./page_section/HomeSection3"
import Footer from "./component/Footer"
import { Helmet } from "react-helmet"

const Home = ({ content }) => {
  return (
    <div className="home-container">
       <Helmet>
    <title>{content?.MT[0].metaTitle}</title>
    <meta name='description' content={content?.MT[0].metaDescription}/>
    <meta name='keywords' content={content?.MT[0].metaKeywords}/>
    </Helmet>      
      <div className="section1_container section1_bg">
        <HomeSection1 />
      </div>
      <div className="section2_container section2_bg">
        <HomeSection2 />
      </div>
      <div className="section_whychoose">
        <WhyChoose content={content} />
      </div>
      <div className="section3_container section3_bg">
        <HomeSection3 content={content} />
      </div>
      <Footer />
    </div>
  )
}

export default Home