import React from 'react';
import { Action } from '../../types'
import './index.css';

const Button = ({
    dispatch = () => { },
    text = ""
}: {
    dispatch: (action: Action) => void;
    text: string
}) => {
    return (
        <button className='button' onClick={() => dispatch({ type: "DEFAULT" })}>{text}</button>
    );
};

export default Button;