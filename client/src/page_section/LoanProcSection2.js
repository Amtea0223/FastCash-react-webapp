import "./loanProcSection.css"
import handphone from "../images/loanProcess/handphone.png"

const LoanProcSection2 = ({content}) => {
  console.log(content)
  return (
    <div className="loan-process-section">
      <div className="loan-process-section2">
        <div className="loan-process-section2-left">
          <img
            src={handphone}
            alt=""
            className="loan-process-section2-handphone"
          />
        </div>
        <div className="loan-process-section2-right">
          <div className="loan-process-steps">
            <div className="loan-process-steps-block">
              <div className="loan-process-step-num">01</div>
              <div className="loan-process-step-detail">                
                <div className="loan-process-step-title">{content?.loanProcess[0].title}</div>
                <div className="loan-process-step-content">
                {content?.loanProcess[0].description}
                </div>
              </div>
            </div>
            <div className="loan-process-step-vl"></div>
            <div className="loan-process-steps-block">
              <div className="loan-process-step-num">02</div>
              <div className="loan-process-step-detail">
                <div className="loan-process-step-title">{content?.loanProcess[1].title}</div>
                <div className="loan-process-step-content">
                {content?.loanProcess[1].description}
                </div>
              </div>
            </div>
            <div className="loan-process-step-vl"></div>
            <div className="loan-process-steps-block">
              <div className="loan-process-step-num">03</div>
              <div className="loan-process-step-detail">
                <div className="loan-process-step-title">{content?.loanProcess[2].title}</div>
                <div className="loan-process-step-content">
                {content?.loanProcess[2].description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoanProcSection2
