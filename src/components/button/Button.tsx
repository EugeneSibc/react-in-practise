import React from 'react';

type ButtonPropsType = {
    callBack:() => void    
    name: string    
}

const Button = (props:ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }   
    return (
        <div>
           <button onClick={onClickButtonHandler}>{props.name}</button> 
        </div>
    );
};

export default Button;