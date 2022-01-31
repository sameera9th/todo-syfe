import React, { useState } from 'react';
import { Item, Action } from '../../types'
import Input from '../Input';
import moment from 'moment';
import './index.css';

const TodoItem = ({
    item = { id: 0, description: "", timestamp: "" },
    editTodo = () => { },
    dispatch = () => { },
    setEditIndex = () => { },
    editIndex = null
}: {
    item: Item;
    editTodo: (item: Item) => void;
    dispatch: (action: Action) => void;
    setEditIndex: (editIndex: Number | null) => void;
    editIndex: Number | null;
}) => {

    const [text, setText] = useState<String>(item.description);

    const handleTodoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const saveEdit = () => {
        if(text){
            dispatch({ type: "EDIT", data: { ...item, description: text.toString(), timestamp: new Date().toString() } });
            setEditIndex(null);
        }
    }
    return (
        <div
            className='todoContainer'
            key={item.id}
        >
            {editIndex !== item.id && <p>{item.description}</p>}
            {editIndex === item.id && <>
                <Input
                showLabel={false}
                value={text.toString()}
                onChange={(e) => handleTodoInput(e)}
            />
                <button className='button' style={{marginRight: 'auto'}} onClick={saveEdit}>Save</button>
            </>}
            <p style={{ marginRight: editIndex === item.id ? 'auto' : ''}}>{moment(item.timestamp).format('YYYY-MM-DD HH:mm:ss')}</p>
            <div className='todoCenter'>
                <button className='button' onClick={() => editTodo(item)}>Edit</button>
                <button
                    className='button'
                    onClick={() => dispatch({ type: "DELETE", data: item.id || 0 })}
                    style={{ marginLeft: "16px" }}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default TodoItem;