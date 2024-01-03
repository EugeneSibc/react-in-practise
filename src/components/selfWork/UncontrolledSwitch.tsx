import React, { useState } from 'react';
import './../../App.css';

type SwitchPropsType = {
    // on: boolean
}
export const UncotrolledSwitch = () => {
    const [onOff, setOnOff] = useState(Boolean)
    const onStyle = {
        marginTop: "5px",
        width: '30px',
        height: '20px',
        border: "1px solid black",
        display: "inline-block",
        cursor: "pointer",
        marginRight: "3px",
        backgroundColor: onOff ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        cursor: "pointer",
        marginRight: "5px",
        backgroundColor: onOff ? "white" : "red"
        
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: onOff ? "green" : "red"
    }    

    return (
        <div>
            <div style={onStyle} onClick={()=>{setOnOff(true)}}>on</div>
            <div style={offStyle} onClick={()=>{setOnOff(false)}}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

