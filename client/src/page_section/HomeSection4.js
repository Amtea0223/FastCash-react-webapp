import "./homeSection.css"
import istockman from "../images/home/home_istockphoto.png"
import CalculatorContent from "../component/CalculatorContent"
import ApplicationBtn from "../component/ApplicationBtn"

const HomeSection4 = () => {
  return (
    <div className="home-section4">
      <div className="home-section4-container">
        <div className="home-section4-container-left">
          <div className="home-section4-container-left-description">
            <h1>多種貸款服務</h1>
            <h3>無論你想周轉定拓展業務</h3>
            <p>我們都可提供免信貸報告審批貸款</p>
            <h2>不影響現有評級之餘亦可<span>快速獲批</span></h2>
          </div>
          <div className="home-section4-container-left-apply-btn">
            <ApplicationBtn isAnimBtn={true} />
          </div>
        </div>
        <div className="home-section4-container-right">
          <img className="istock-man" src={istockman} alt="" />
        </div>
        
     
      </div>
    </div>
  )
}

export default HomeSection4
