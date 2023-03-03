import "./hotTopics.css"
import Banner from "./component/Banner"
import HotTopicsSection from "./page_section/HotTopicsSection"
import banner_bg from "./images/hotTopics/blog_bg.jpg"
import Footer from "./component/Footer"
import { Helmet } from "react-helmet"
import css from './pages/hottopics.module.css'


const HotTopics = ({content,postData}) => {
  return (
    <div>
      {/* <Helmet>
    <title>{content?.MT[13].metaTitle}</title>
    <meta name='description' content={content?.MT[13].metaDescription}/>
    <meta name='keywords' content={content?.MT[13].metaKeywords}/>
    </Helmet>         */}      
      
      <div className={css.banner}>
        <h1>貸款迷思</h1>
      </div>
      
      <HotTopicsSection data = {postData} />
      <Footer />
    </div>
  )
}

export default HotTopics
