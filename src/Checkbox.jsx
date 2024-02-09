import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CheckboxComponent = (question) => {
  const question_name = question["question"];
  const [checked, setChecked] = useState(
    localStorage.getItem(question_name) === "true"
  );

  const handleClick = (question_name) => {
    if (localStorage.getItem(question_name) === "true") {
      localStorage.setItem(question_name, false);
      setChecked(false);
    } else {
      localStorage.setItem(question_name, true);
      setChecked(true);
    }
  };

  return (
    <Checkbox 
      checked={checked} 
      onClick={() => handleClick(question_name)} 
      icon={<CheckCircleOutlineOutlinedIcon/>} 
      checkedIcon={<CheckCircleIcon/>}
      sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
    />
  );
};

export default CheckboxComponent;
