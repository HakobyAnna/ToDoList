import { useState } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import "./ListElement.css";

function ListElement(props) {
  const [checkButton, setButton] = useState(false);

  function handleClick() {
    checkButton ? setButton(false) : setButton(true);
     props.addFunction(props.item._id);
  }

  return (
    <div className="list-container">
      <FormControlLabel
        value="end"
        control={<Checkbox color="primary" checked={props.checked} onClick={handleClick} />}
        label={props.item.text}
        labelPlacement="end"
        className={props.lineStyle}
      />
    </div>
  );
}

export default ListElement;
