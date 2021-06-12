import { useState } from 'react';
import {FormControlLabel, Checkbox} from '@material-ui/core';
import './ListElement.css'

function ListElement(props) {
    const [checkButton, setButton] = useState(false);

    function handleClick() {
        checkButton ? setButton(false) : setButton(true);
    }

    return (
        <div className='list-container'>
            <FormControlLabel
            value="end"
            control={<Checkbox color="primary" onClick={handleClick}/>}
            label={props.text}
            labelPlacement="end"
            className={checkButton && 'done'}
            />
        </div>
    )
}

export default ListElement;