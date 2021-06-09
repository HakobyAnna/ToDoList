import { useState } from 'react';
import {FormControlLabel, Checkbox} from '@material-ui/core';
import './ListElement.css'

function ListElement(props) {
    const [checkButton, setButton] = useState(false);

    function handleClick() {
        checkButton ? setButton(true) : setButton(false);
    }

    return (
        <div className='list-container'>
            {/* <input type='checkbox' onClick={handleClick}/>
            <p  className="text">{props.text}</p> */}
            <FormControlLabel
            value="end"
            control={<Checkbox color="primary" onClick={handleClick}/>}
            label={props.text}
            labelPlacement="end"
            />
        </div>
    )
}

export default ListElement;