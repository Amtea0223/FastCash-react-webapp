import "./hotTopics.css"
import Banner from "./component/Banner"
import HotTopicsSection from "./page_section/HotTopicsSection"
import banner_bg from "./images/hotTopics/blog_bg.jpg"
import Footer from "./component/Footer"
import { Helmet } from "react-helmet"

const HotTopics = ({content,postData}) => {
  return (
    <div>
      <Helmet>
    <title>{content?.MT[13].metaTitle}</title>
    <meta name='description' content={content?.MT[13].metaDescription}/>
    <meta name='keywords' content={content?.MT[13].metaKeywords}/>
    </Helmet>        
      <Banner name={"Hot Topics"} name_ch={"熱門文章"} bg_url={banner_bg} />
      <HotTopicsSection data = {postData} />
      <Footer />
    </div>
  )
}

export default HotTopics
