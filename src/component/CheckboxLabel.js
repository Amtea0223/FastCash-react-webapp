import * as React from "react";

import Checkbox from "@mui/material/Checkbox";

const CheckboxLabel = ({ checkbox_list, setChecked }) => {
  return (
    <div>
      {checkbox_list.map((item, index) => (
        <div key={index} className="d-flex mb-5">
          <Checkbox
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
          />
          <label className="ms-2 ">{item.text}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxLabel;
