import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import LoanProcess from "../../LoanProcess"
import ApplyForm from "../ApplyForm"
import Footer from "../Footer"
import "./application.css"
import { Helmet } from "react-helmet"
const Application = ({ setShowBottomNav, data }) => {
  let { content } = useParams()
  const [isForm, setIsForm] = useState(true)  

  useEffect(() => {
    window.scrollTo(0, 0)
    if (content === "form") {
      setIsForm(true)
    } else {
      setIsForm(false)
    }
  }, [content])

  return (
    <div className="application-container">
      {isForm && <ApplyForm setShowBottomNav={setShowBottomNav} content={data} />}
      {isForm && <Footer />}
      {!isForm && <>
      <LoanProcess data = {data}/> <Helmet>
      <title>{data?.MT[8].metaTitle}</title>
      <meta name='description' content={data?.MT[8].metaDescription}/>
      <meta name='keywords' content={data?.MT[8].metaKeywords}/>
      </Helmet></>}
    </div>
  )
}

export default Application
