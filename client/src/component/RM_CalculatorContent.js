import { useState, useEffect } from "react"
import "./calculatorContent.css"
import NumberSlider from "./NumberSlider"
import TextField from "@mui/material/TextField"
import ApplicationBtn from "./ApplicationBtn"

const CalculatorContent = () => {
  const [amount, setAmount] = useState(0)
  const [principal, setPrincipal] = useState(0)
  const [period, setPeriod] = useState(0)
  const [monthlyPay, setMonthlyPay] = useState(0)
  // const [phoneNumb, setPhoneNumb] = useState("")

  const HandleAmount = (value) => {
    setPrincipal(value)
    FormatMoney(value)
  }

  const FormatMoney = (value) => {
    setAmount(value.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"))
  }

  useEffect(() => {
    let P = principal
    let t = period
    let i = 0.3 / 12
    let result = 0
    result = (P * i * (1 + i) ** t) / ((1 + i) ** t - 1)

    if (P === 0 || t === 0) {
      setMonthlyPay("")
    } else {
      setMonthlyPay("$" + Math.round(result))
    }
  }, [principal, period])

  return (
    <div className="container caltor-position caltor">      
      <h2>貸款計數機</h2>
      <div className="caltor-item">
        <p>貸款金額</p>
        <p>${amount}</p>
      </div>

      
      
      <NumberSlider
        max_value={500000}
        step_value={1000}
        setChangedValue={HandleAmount} //setChangedValue get value from NumberSlider,HandleAmountFormat format value
      />

      <div className="caltor-item">
        <p>還款期</p>
        <p>{period} 個月</p>
      </div>

      <NumberSlider
        max_value={60}
        step_value={12}
        setChangedValue={setPeriod}
      />
      <h3>每期還款額：{monthlyPay}</h3>

      <div className="caltor-apply-container">
        <div className="caltor-appy-btn">
          <ApplicationBtn isAnimBtn={true} />
        </div>
        <div className="statement mt-5">
          <p>註: 根據《放債人條例》年利率最高不超過60厘。</p>
          <p>供款期由6個月至個120月常見還款例子:</p>
          <p>
            年利率為30%情況下的貸款HK$10,000， 還款期數12期，每期還款額為 HK$975
          </p>
        </div>
      </div>      
    </div>
  )
}

export default CalculatorContent
