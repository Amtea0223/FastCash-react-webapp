import "./home.css"
import HomeSection1 from "./page_section/HomeSection1"
import WhyChoose from "./component/WhyChoose"
import HomeSection2 from "./page_section/HomeSection2"
import HomeSection3 from "./page_section/HomeSection3"
import Footer from "./component/Footer"
import { Helmet } from "react-helmet"
import HomeSection4 from "./page_section/HomeSection4"
import HomeSection5 from "./page_section/HomeSection5"

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
        <div>
          
        </div>
      </div>
      <div className="section2_container section2_bg">
        <HomeSection2 />
      </div>
      <div className="section_whychoose">
        <WhyChoose content={content} />
      </div>
      <div className="section4_container section4_bg">
          <HomeSection4/>
      </div>
      <div className="section3_container section3_bg">
        <HomeSection3 content={content} />
      </div>
      <div className="section5_container section5_bg">
        <HomeSection5/>
      </div>
      <Footer />
    </div>
  )
}

export default Home
