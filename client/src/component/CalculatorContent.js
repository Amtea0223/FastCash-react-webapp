import { useState, useEffect } from "react";
import "./calculatorContent.css";
import NumberSlider from "./NumberSlider";
import TextField from "@mui/material/TextField";
import ApplicationBtn from "./ApplicationBtn";
import { Input, InputAdornment } from "@mui/material";
import { width } from "@mui/system";

const CalculatorContent = () => {
  // const [amount, setAmount] = useState(0)
  const [principal, setPrincipal] = useState(0);
  const [period, setPeriod] = useState("");
  const [monthlyPay, setMonthlyPay] = useState(0);
  const [amount, setAmount] = useState("");
  const [focused, setFocused] = useState(false);

  const HandleAmount = (value) => {
    setPrincipal(value);
    FormatMoney(value);
  };

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
    setAmount(value.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
  };

  useEffect(() => {
    let P = amount;
    let t = period;
    let i = 0.3 / 12;
    let result = 0;
    result = (P * i * (1 + i) ** t) / ((1 + i) ** t - 1);

    if (P === "" || t === 0) {
      setMonthlyPay("");
    } else {
      setMonthlyPay("$" + Math.round(result));
    }
  }, [amount, period]);

  return (
    <div
      className="container caltor-position caltor"
      style={{ width: "500px" }}
    >
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
            InputProps={{
              inputMode: "numeric",
              pattern: "d*",
              startAdornment: (
                <InputAdornment position="start" className="IA">
                  $
                </InputAdornment>
              ),
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
            InputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            onChange={(e) => {
              setPeriod(e.target.value);
            }}
            className={"caltor-item-txtField-month"}
          />
        </div>
        <div className="caltor-slider">
          <NumberSlider
            max_value={60}
            step_value={12}
            setChangedValue={setPeriod}
          />
        </div>
      </div>

      <h3 style={{ marginLeft: "1.5rem" ,marginTop: "2rem"}}>每期還款額：{monthlyPay}</h3>
      <div className="caltor-note">
        <p style={{ fontSize: "1px",marginTop:"2rem",marginLeft:"1rem",marginRight:"1rem" }}>
          以上計算假設實際年利率為5-30%不等，只供參考，最終實際年利率按個別申請人之實際情況而定。
        </p>
      </div>
    </div>
  );
};

export default CalculatorContent;
