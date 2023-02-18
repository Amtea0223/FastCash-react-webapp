import "./hotTopicsSection.css"
import { FormDatatext } from "../codeHelper/useFormatDatatext"
import useFetch from "../codeHelper/useFetch"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ENV } from "../config"
import { Link } from "react-router-dom"

const HotTopicsSection = ({data}) => {
  // const { data, loading, error } = useFetch(ENV + "/api/v1/post")
  const [showPostIndex, setShowPostIndex] = useState(0)
  const [lastPostIndex, setLastPostIndex] = useState(0)
  const [arrData, setArrData] = useState([])
  const [showPostTitle, setShowPostTitle] = useState("")
  const [showPostBanner, setShowPostBanner] = useState("")
  const [showPostContent, setShowPostContent] = useState("")

  let { order } = useParams()

  useEffect(() => {
    // let flag = handleData()
    // if (flag) {
    //   setShowPostIndex(lastPostIndex)
    //   handleShowPost()
    // }
   
    if(order!=null){
      setShowPostTitle(data?data[order-1].title:null)
      setShowPostContent(data?data[order-1].content:null)
      setShowPostBanner(data?data[order-1].banner:null)
    } 

  }, [lastPostIndex, data, arrData,order])

  const handleShowPost = () => {
    // setShowPostTitle(arrData[lastPostIndex].title)
    setShowPostContent(arrData[lastPostIndex].content)
    setShowPostBanner(arrData[lastPostIndex].banner)
  }
  // const handleData = () => {
  //   if (data) {
  //     //Get total number of post
  //     let totalElement = data ? data.length : 0
  //     let count = totalElement - 1
  //     //assign each JSON object to an array
  //     while (count >= 0) {
  //       arrData[count] = data ? data[count] : 0
  //       count--
  //     }
  //     setLastPostIndex(arrData[arrData.length - 1].ordering - 1)
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  // const handleSelectPost = (value) => {
  //   setShowPostTitle(arrData[value - 1].title)
  //   setShowPostContent(arrData[value - 1].content)
  //   setShowPostBanner(arrData[value - 1].banner)
  //   setShowPostIndex(value - 1)
  // }

  function postList() {
    // let postListArr = []
    // postListArr = data?data.filter((data) => data.ordering!=order):null
    // postListArr.reverse()
    return (
      <>
        {data?.filter(obj =>obj.ordering!=order).map((c, index) => (
          <div key={index} className="topicList">            
            <Link to={"/hottopics/" + c.ordering + "/" + String(c.title).replace(/\s/g, "")}>
            <div
              // onClick={() => handleSelectPost(c.ordering)}
              className="postList-item-container"
            >
              <div className="postList-thumbnail">
                <img src={c.thumbnail} alt={c.title} />
              </div>
              <div className="textbox">
                {c.title}
                <br />
                {c.content.substring(0, 15)}
                ...
              </div>
            </div>
            </Link>
          </div>
        ))}
      </>
    )
  }

  return (
    <div className="hottopics">
      <div className="hotTopics-container">
        <div className="hotTopics-left">
          <h2>{showPostTitle}</h2>
          <div className="hotTopics-left-banner">
            <img src={showPostBanner} alt={showPostTitle} />
          </div>
          <div className="hotTopics-left-conent">
            {FormDatatext(showPostContent)}
          </div>
        </div>
        <div xl={3} className="hotTopics-right">
          <h2>為你推薦</h2>
          <hr />
          <ul className="topicList ">{postList()}</ul>
        </div>
      </div>
    </div>
  )
}
export default HotTopicsSection
