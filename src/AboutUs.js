import { Helmet } from "react-helmet"
import "./aboutUs.css"
import { FormDatatext } from "./codeHelper/useFormatDatatext"
import ApplicationBtn from "./component/ApplicationBtn"
import Footer from "./component/Footer"
const AboutUs = ({ content }) => {
  return (    
    <div className="aboutUs">
      <Helmet>
    <title>{content?.MT[1].metaTitle}</title>
    <meta name='description' content={content?.MT[1].metaDescription}/>
    <meta name='keywords' content={content?.MT[1].metaKeywords}/>
    </Helmet>
      <div className="aboutUs-container">
        <div className="aboutUs-left">
          <div className="top-space"></div>
          <div className="banner-title">
            <span>
              About Us <br />
              關於我們
            </span>
          </div>
          <div className="aboutus-appybtn">
            <ApplicationBtn isAboutusBtn={true} />
          </div>
        </div>
        <div className="aboutUs-right">
          <div className="aboutUs-title">{FormDatatext(content?.aboutus.title)}</div>
          <br />

          {FormDatatext(content?.aboutus.description)}
        </div>
      </div>

      <div className="golden-bottom" />
      <Footer />
    </div>
  )
}

export default AboutUs
