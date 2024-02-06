import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

const CheckboxComponent = (index) => {
  const indexValue = index["index"];
  const [checked, setChecked] = useState(
    localStorage.getItem(indexValue) === "true"
  );

  const handleClick = (indexValue) => {
    setChecked(!checked);
    if (localStorage.getItem(indexValue) === "true") {
      localStorage.setItem(indexValue, false);
    } else {
      localStorage.setItem(indexValue, true);
    }
  };

  return <Checkbox checked={checked} onClick={() => handleClick(indexValue)} />;
};

export default CheckboxComponent;
