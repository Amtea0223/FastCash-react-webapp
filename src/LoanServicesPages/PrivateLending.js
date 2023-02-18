import "../loanServices.css"
import Banner from "../component/Banner"
import pic from "../images/loanService/sidepic/4.jpg"
import Footer from "../component/Footer"
import { FormDatatext } from "../codeHelper/useFormatDatatext"
import banner_bg from "../images/loanService/loanservice_bg.png"
import { Helmet } from "react-helmet"

const PrivateLending = ({ content,metaData }) => {
  window.scrollTo(0, 90)
  return (
    <div className="loanServices">
      <Helmet>
    <title>{metaData?.MT[5].metaTitle}</title>
    <meta name='description' content={metaData?.MT[5].metaDescription}/>
    <meta name='keywords' content={metaData?.MT[5].metaKeywords}/>
    </Helmet>
      <div className="loanServices-container">
        <Banner name={"Loan Service"} name_ch={"貸款服務"} bg_url={banner_bg} />
        <div className="loanServices-content">
          <div className="loanServices-content-container">
            <div className="loanServices-content-pic">
              <img src={pic} alt="" />
            </div>
            <div className="loanServices-content-desc">
              <div className="loanServices-content-title">
                {FormDatatext(content ? content[3].label : "")}
              </div>
              {FormDatatext(content ? content[3].description : "")}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrivateLending
