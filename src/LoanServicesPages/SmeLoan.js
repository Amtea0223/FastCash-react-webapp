import "../loanServices.css"
import Banner from "../component/Banner"
import pic from "../images/loanService/sidepic/3.jpg"
import Footer from "../component/Footer"
import { FormDatatext } from "../codeHelper/useFormatDatatext"
import banner_bg from "../images/loanService/loanservice_bg.png"
import { Helmet } from "react-helmet"

const SmeLoan = ({ content,metaData }) => {
  window.scrollTo(0, 90)
  return (
    <div className="loanServices">
            <Helmet>
    <title>{metaData?.MT[4].metaTitle}</title>
    <meta name='description' content={metaData?.MT[4].metaDescription}/>
    <meta name='keywords' content={metaData?.MT[4].metaKeywords}/>
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
                {FormDatatext(content ? content[2].label : "")}
              </div>
              {FormDatatext(content ? content[2].description : "")}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SmeLoan
