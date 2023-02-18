import "./loanProcess.css"
import LoanProcSection2 from "./page_section/LoanProcSection2"
import Banner from "./component/Banner"
import bg from "./images/loanProcess/bg.png"
import ApplyForm from "./component/ApplyForm"
import Footer from "./component/Footer"
import { Helmet } from "react-helmet"

const LoanProcess = ({data}) => {
  function setOpen() {}
  function setShowBottomNav() {}  

  return (
    <div className="home-container">
        <Helmet>
    <title>{data?.MT[8].metaTitle}</title>
    <meta name='description' content={data?.MT[8].metaDescription}/>
    <meta name='keywords' content={data?.MT[8].metaKeywords}/>
    </Helmet>
      <Banner name={"Loan Process"} name_ch={"貸款步驟"} bg_url={bg} />
      <LoanProcSection2 content={data}></LoanProcSection2>
      <ApplyForm
        setOpen={setOpen}
        setShowBottomNav={setShowBottomNav}
        isLoanProcess={true}
      />
      <Footer />
    </div>
  )
}

export default LoanProcess
