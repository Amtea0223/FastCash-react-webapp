import { useState, useRef, useEffect } from "react";
import "./estimateForm.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import { FormDatatext } from "../codeHelper/useFormatDatatext";
import { useMediaQuery } from "react-responsive";
import { isMobilePhone } from "validator";
import moment from "moment";
import { sendEmail } from "./Email/SendEmail";
import { ENV } from "../config";

const EstimateForm = ({ content }) => {
  const formRef = useRef();

  const SubmitButton = styled(Button)({
    backgroundColor: "#77BF27",
    width: "166px",
    height: "71px",
    fontSize: "24px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#707070",
    },
  });

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  const [appliciantname, setAppliciantname] = useState("");
  const [phoneNumb, setPhoneNumb] = useState("");
  const [appliciantid, setAppliciantid] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [purpose, setPurpose] = useState("");
  const [amount, setAmount] = useState("");
  const [confirm1, setConfirm1] = useState(false);


  const [confirm2, setConfirm2] = useState(false);
  const [isVerified, setisVerified] = useState(false);
  const [checkList, setCheckList] = useState("");


  

  const CleanData = () => {
    setConfirm1(false);
    // setConfirm2(false);
    setAppliciantname("");
    setAppliciantid("");
    setPhoneNumb("");
    setPaymentMethod("");
    setPurpose("");
    setAmount("");
  };

  const handleSubmit = () => {
    const data = {
      name: appliciantname,
      phone: phoneNumb,
      id: appliciantid,
      paymentMethod: paymentMethod,
      purpose: purpose,
      amount: amount,
      agreeTerms1: confirm1,
      timestamp: moment()
        .utcOffset(8)
        .format("YYYY-MM-DD HH:mm:ss"),
    };

    try {
      fetch(ENV + "/api/v1/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.ok) {
            setisVerified(true);
          }
          
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          CleanData();
        });
    } catch (error) {
      
    }finally{
      CleanData();
    }    
  };

  const validatePhoneInput = (val) => {
    if (val === "") {
      return false;
    } else {
      const result = isMobilePhone(val, "en-HK");
      return result;
    }
  };



  const ValidateData = () => {
    setisVerified(false);
    if (!!!confirm1) {
      return alert("???????????????");
    } else if (appliciantname.replace(/\s/g, "") === "") {
      setisVerified(false);
      return alert("?????????????????????");
    } else if (validatePhoneInput(phoneNumb) === false) {
      setisVerified(false);
      return alert("??????????????????????????????");
    } else if (amount === "" || isNaN(amount)) {
      setisVerified(false);
      return alert("??????????????????????????????");
    } else {
      handleSubmit();
    }
  };

  

  return (
    <>
      {isDesktopOrLaptop && (
        <form
          ref={formRef}
          onSubmit={(e) => sendEmail(e, formRef.current, "template_valuation")}
        >
          <input
            type="text"
            style={{ display: "none" }}
            name="checklist"
            defaultValue={checkList}
          ></input>
          <div className="estimForm">
            <div className="estimForm1">
              <h2>????????????</h2>
            </div>
            <div className="estimForm2"></div>
            <div className="estimForm3">
              <div className="estimForm3-left">

                <label className="estimForm-label">??????</label>
                <TextField
                  id="outlined-name"
                  label=""
                  value={appliciantname}
                  variant="outlined"
                  required
                  sx={{ width: "40ch" }}
                  onChange={(e) => setAppliciantname(e.target.value)}
                  name="name"
                />
                <label className="estimForm-label">????????????</label>
                <TextField
                  id="outlined-name"
                  label=""
                  value={phoneNumb}
                  variant="outlined"
                  required
                  sx={{ width: "40ch" }}
                  onChange={(e) => setPhoneNumb(e.target.value)}
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  name="phoneNumb"
                />
                <label className="estimForm-label">???????????????</label>
                <TextField
                  id="outlined-name"
                  label=""
                  value={appliciantid}
                  variant="outlined"
                  required
                  sx={{ width: "40ch" }}
                  onChange={(e) => setAppliciantid(e.target.value)}
                  name="appliciantid"
                />
              </div>
              <div className="estimForm3-right">
                <label className="estimForm-label">????????????</label>
                <TextField
                  label=""
                  variant="outlined"
                  value={paymentMethod}
                  name="paymentMethod"
                  required
                  sx={{ width: "40ch" }}
                  // inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  onChange={(e) => {
                    setPaymentMethod(e.target.value);
                  }}
                />
                <label className="estimForm-label">????????????</label>
                <TextField
                  label=""
                  variant="outlined"
                  value={purpose}
                  name="purpose"
                  required
                  sx={{ width: "40ch" }}
                  // inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  onChange={(e) => {
                    setPurpose(e.target.value);
                  }}
                />
                <label className="estimForm-label">????????????</label>
                <TextField
                  label=""
                  variant="outlined"
                  value={amount}
                  name="amount"
                  required
                  sx={{ width: "40ch" }}
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="estimForm4">
              <Checkbox
                checked={confirm1}
                onChange={(e) => {
                  setConfirm1(e.target.checked);
                }}
              />
              <label>
                *???????????????18?????????????????????????????????????????????????????????
                ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              </label>
            </div>
            <div className="mt-3 estimForm-btn">
              <SubmitButton
                variant="contained"
                onClick={ValidateData}
                type="submit"
              >
                ??????
              </SubmitButton>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default EstimateForm;
