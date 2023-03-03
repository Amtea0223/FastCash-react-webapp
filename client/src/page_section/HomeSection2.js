import "./homeSection.css"
import man from "../images/home/home_calculator_background.png"
import dot_bg from "../images/caltor_dot_bg.png"
import CalculatorContent from "../component/CalculatorContent"

const HomeSection2 = () => {
  return (
    <div className="home-section2">
      <img className="calculator-dot-bg" src={dot_bg}/>
      <p><span style={{color:"#9DD75E"}}>特快</span>網上貸款</p>
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
