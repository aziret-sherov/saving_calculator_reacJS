import React from 'react';
import './Switcher.css';
import {Switch} from '@mui/material';

const Switcher = ({radio, setRadio}) => {
    return (
        <div className={"box1"}>
            <p className={"box1Text"}>Saving calculator</p>
            <div className={"checkBox"}>
                <Switch onClick={() => {
                    setRadio(!radio)
                }}/>
                <p className={"checkBoxP"}>{radio ? `Calculate by total amount` : `Calculate by monthly saving`}</p>
            </div>
        </div>
    );
};

export default Switcher;
