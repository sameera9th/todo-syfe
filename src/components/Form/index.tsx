import React from 'react';
import Input from '../Input';

const index = ({
    addTodo = () => { },
    description = "",
    handleTodoInput = () => { }
}: {
    addTodo: (e: React.FormEvent<HTMLFormElement>) => void;
    description: string;
    handleTodoInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
        <div style={{ margin: "40px" }}>
            <form onSubmit={addTodo}>
                <Input
                    label="To do:"
                    value={description}
                    onChange={(e) => handleTodoInput(e)}
                />
                <input className='button' type="submit" value="Add Todo Item" />
            </form>
        </div>
    );
};

export default index;