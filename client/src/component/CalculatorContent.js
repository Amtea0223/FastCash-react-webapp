import { useState, useEffect } from "react"
import "./calculatorContent.css"
import NumberSlider from "./NumberSlider"
import TextField from "@mui/material/TextField"
import ApplicationBtn from "./ApplicationBtn"
import { Input, InputAdornment } from "@mui/material"
import { width } from "@mui/system"


const CalculatorContent = () => {
  // const [amount, setAmount] = useState(0)
  const [principal, setPrincipal] = useState(0)
  const [period, setPeriod] = useState("")
  const [monthlyPay, setMonthlyPay] = useState(0)
  const [amount, setAmount] = useState("")
  const [focused, setFocused] = useState(false);

  const HandleAmount = (value) => {
    setPrincipal(value)
    FormatMoney(value)
  }

  const handleInput = (event) => {
    let value = event.target.value;
    if (!value || /^\d+$/.test(value)) {
      setAmount(value);
    }
  };

  const handleFocus = (event) => {
    if (!focused) {
      setFocused(true);
      event.target.selectionStart = event.target.value.length;
      event.target.selectionEnd = event.target.value.length;
    }
  };

  const FormatMoney = (value) => {
    setAmount(value.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"))
  }

  useEffect(() => {


    let P = amount
    let t = period
    let i = 0.3 / 12
    let result = 0
    result = (P * i * (1 + i) ** t) / ((1 + i) ** t - 1)

    if (P === "" || t === 0) {
      setMonthlyPay("")
    } else {
      setMonthlyPay("$" + Math.round(result))
    }
  }, [amount, period])

  

  return (
    <div className="container caltor-position caltor">
      <div className="caltor-header">
        <h3>貸款計數機</h3>
      </div>
      <div className="caltor-center">
        <div className="caltor-item">
          <p>貸款金額</p>
          {/* <p>${amount}</p> */}
            <TextField 
                  variant="outlined"
                  placeholder=" 150,000"
                  value={amount}
                  name="amount" 
                  required
                  InputProps={{ inputMode:"numeric",
                                pattern:"\d*",
                                startAdornment:<InputAdornment position="start" className="IA">$</InputAdornment>,
                                
                              }}
                  onInput={handleInput}
                  onFocus={handleFocus}
                  className={"caltor-item-txtField"}
                  autoFocus
              />
        </div>

        <div className="caltor-item">
          <p>還款期(個月)</p>
          {/* <p>{period} 個月</p> */}
          <TextField
                variant="outlined"
                placeholder=""
                disabled
                value={period}
                name="period"
                required
                InputProps={{ inputMode: "numeric", 
                              pattern: "[0-9]*" 
                            }}
                onChange={(e) => {
                  setPeriod(e.target.value)
                  }}
                className={"caltor-item-txtField-month"}
                  />
        </div>

        <NumberSlider
          max_value={60}
          step_value={12}
          setChangedValue={setPeriod}
        />
      </div>
      

      <h3>每期還款額：{monthlyPay}</h3>

      {/* <div className="caltor-apply-container">
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
      </div>       */}
    </div>
  )
}

export default CalculatorContent
