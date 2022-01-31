import React from 'react';
import './index.css';

const Input = ({
    showLabel = true,
    value = '',
    onChange = () => { },
    label = ''
}: {
    showLabel?: boolean,
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string
}) => {

    return (
        <label>
            {showLabel && label}
            <input
                className='todoInput'
                value={value}
                onChange={onChange}
                style={{ marginLeft: "16px", marginRight: "16px" }}
            />
        </label>
    );
};

export default Input;