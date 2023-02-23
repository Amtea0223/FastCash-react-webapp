import "./homeSection.css"
import man from "../images/home/home_calculator_background.png"
import CalculatorContent from "../component/CalculatorContent"

const HomeSection2 = () => {
  return (
    <div className="home-section2">
      <p><span style={{color:"#9DD75E"}}>特快</span>特快網上貸款</p>
      <div className="home-section2-container">
        <div className="home-section2-container-left">
          <img className="calculator-man" src={man} alt="" />
        </div>
        <div className="calculator">
          <CalculatorContent />
        </div>
      </div>
    </div>
  )
}

export default HomeSection2
