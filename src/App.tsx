import React, { useState } from "react";
import "./App.css";
import { initalState, reducer } from "./reducer/index";
import { Item } from "./types";
import { TodoItem, Button, Form } from './components';
import { usePersistedReducer } from './customHooks/usePersistedReducer';

function App() {
  const { state, dispatch } = usePersistedReducer(reducer, initalState, 'todoItems');
  const [input, setInput] = useState<Item>({
    id: 0,
    description: '',
    timestamp: ''
  });
  const [editIndex, setEditIndex] = useState<Number | null>(null);

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.description) {
      dispatch({ type: "ADD", data: input });
      setInput({
        id: 0,
        description: '',
        timestamp: ''
      });
    }
  };

  const handleTodoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, description: e.target.value, timestamp: new Date().toString() })
  }

  const editTodo = (item: Item) => {
    setEditIndex(item.id);
  };

  const sortedTodos = state.todos.sort((a: Item, b: Item) => +new Date(b.timestamp) - +new Date(a.timestamp))

  return (
    <div className="App">
      <Form
        description={input.description}
        handleTodoInput={handleTodoInput}
        addTodo={addTodo}
      />
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          editTodo={editTodo}
          setEditIndex={setEditIndex}
          dispatch={dispatch}
          editIndex={editIndex}
        />
      ))}
      <Button
        dispatch={dispatch}
        text="Clear Cache"
      />
    </div>
  );
}

export default App;
