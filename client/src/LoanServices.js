import "./loanServices.css"
import LoanSerSection2 from "./page_section/LoanSerSection2"
import { LoanSerContents } from "./component/LoanSerContents"
import Banner from "./component/Banner"
import banner_bg from "./images/loanService/loanservice_bg.png"
import Footer from "./component/Footer"

const LoanServices = ({ content }) => {
  return (
    <div className="loanServices">
      <div className="loanServices-container">
        <Banner name={"Loan Service"} name_ch={"貸款服務"} bg_url={banner_bg} />
        <LoanSerSection2
          id1={LoanSerContents[0].id1}
          id2={LoanSerContents[0].id2}
          photo1={LoanSerContents[0].photo1}
          photo2={LoanSerContents[0].photo2}
          title1={content?.loanService[0].title}
          para1={content?.loanService[0].description}
          title2={content?.loanService[1].title}
          para2={content?.loanService[1].description}
        />
        <LoanSerSection2
          id1={LoanSerContents[1].id1}
          id2={LoanSerContents[1].id2}
          photo1={LoanSerContents[1].photo1}
          photo2={LoanSerContents[1].photo2}
          title1={content?.loanService[2].title}
          para1={content?.loanService[2].description}
          title2={content?.loanService[3].title}
          para2={content?.loanService[3].description}
        />
        <LoanSerSection2
          id1={LoanSerContents[2].id1}
          id2={LoanSerContents[2].id2}
          photo1={LoanSerContents[2].photo1}
          photo2={LoanSerContents[2].photo2}
          title1={content?.loanService[4].title}
          para1={content?.loanService[4].description}
          title2={content?.loanService[5].title}
          para2={content?.loanService[5].description}
        />
      </div>
      <Footer />
    </div>
  )
}

export default LoanServices
