import TextField from "@mui/material/TextField"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import InputLabel from "@mui/material/InputLabel"
const Step4Content = ({
  setLoanAmount,
  setPayPeriod,
  setIdCard,
  loanAmount,
  payPeriod,
  idCard,
}) => {
  return (
    <div className="step-content">
      <h3>輸入貸款資料：</h3>
      <br />
      <TextField
        id="outlined-loan-amount"
        label="貸款金額"
        type="number"
        variant="outlined"
        className="mb-5 mt-5"
        value={loanAmount}
        onChange={(e) => {
          setLoanAmount(e.target.value)
        }}
      />
      <FormControl fullWidth>
        <InputLabel id="label-payPeriod">請選擇供款期</InputLabel>
        <Select
          labelId="label-payPeriod"
          id="pay-period"
          label="請選擇供款期"
          value={payPeriod}
          onChange={(e) => {
            setPayPeriod(e.target.value)
          }}
        >
          <MenuItem value={0}></MenuItem>
          <MenuItem value={12}>12個月</MenuItem>
          <MenuItem value={24}>24個月</MenuItem>
          <MenuItem value={36}>36個月</MenuItem>
          <MenuItem value={48}>48個月</MenuItem>
          <MenuItem value={60}>60個月</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="idCard"
        label="身份證號碼"
        type="text"
        variant="outlined"
        className="mb-5 mt-5"
        placeholder="e.g. A1234567(8)"
        value={idCard}
        onChange={(e) => {
          setIdCard(e.target.value.toUpperCase())
        }}
      />
    </div>
  )
}

export default Step4Content
