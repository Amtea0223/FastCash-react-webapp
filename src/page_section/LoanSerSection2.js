import { useEffect } from "react"
import "./loanSerSection.css"

const LoanSerSection2 = (props) => {
  return (
    <>
      {/* <div id={props.id1}></div> */}
      <div id={props.id2}></div>
      <div className="loanSerSection2">
        <div className="loanSerSection2-container sorting-wrap">
          <div className="loanSerBox">
            <img src={props.photo1} alt="pic1" className="loanSer-image" />
          </div>
          <div className="loanSerBox">
            <h1>{props.title1}</h1>
            <p>{props.para1}</p>
          </div>
        </div>

        <div className="loanSerSection2-container sorting-wrap-reverse">
          <div className="loanSerBox">
            <h1>{props.title2}</h1>
            <p>{props.para2}</p>
          </div>

          <div className="loanSerBox">
            <img src={props.photo2} alt="pic1" className="loanSer-image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default LoanSerSection2
