import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";

import './Toggle.scss';

const Toggle = () => {

  const [state, setState] = useState({
    selectOptions: [
      { option: "Crime" },
      { option: "Documentary" },
      { option: "Horror" },
      { option: "Comedy" },
    ],
    selectedOptions: [
      { option: "Crime" },
      { option: "Comedy" }
    ]
  })

  const { selectOptions, selectedOptions } = state;

  return(
    <Multiselect
        options={selectOptions}
        displayValue="option"
        showCheckbox={true}
        selectedValues={selectedOptions}
        placeholder="Select Genre"
        showArrow
    />
  )
}

export default Toggle;