import React from "react";
import "./Switcher.css";
import { Switch } from "@mui/material";

const Switcher = ({ radio, setRadio }) => {
  return (
    <>
      <p className={"title"}>Saving calculator</p>
      <div className={"checkBox"}>
        <Switch
          onClick={() => {
            setRadio(!radio);
          }}
        />
        <p className={"checkBoxText"}>
          {radio ? `Calculate by total amount` : `Calculate by monthly saving`}
        </p>
      </div>
    </>
  );
};

export default Switcher;
