import React, { useState } from 'react';
import './../../App.css';

type SwitchPropsType = {
    onOff: boolean
    setOnOff: (onOff:boolean) => void
}
export const Switch = (props: SwitchPropsType) => {
    
    const onStyle = {
        marginTop: "5px",
        width: '30px',
        height: '20px',
        border: "1px solid black",
        display: "inline-block",
        cursor: "pointer",
        marginRight: "3px",
        backgroundColor: props.onOff ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        cursor: "pointer",
        marginRight: "5px",
        backgroundColor: props.onOff ? "white" : "red"
        
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.onOff ? "green" : "red"
    }    

    return (
        <div>
            <div style={onStyle} onClick={()=>{props.setOnOff(true)}}>on</div>
            <div style={offStyle} onClick={()=>{props.setOnOff(false)}}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

