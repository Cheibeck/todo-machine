import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";

// variables

const defaultTodos = [
  { text: 'cortar cebolla', completed: true },
  { text: 'completar curso react', completed: false },
  { text: 'llorar con la llorona', completed: false },
  { text: 'sacar basura', completed: false }  
]


//funcion app

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <React.Fragment>
          
          <TodoCounter />
                  
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

          <TodoList>
            {todos.map(todo => (
             <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              />
            ))}
          </TodoList>


          <CreateTodoButton />
          
    </React.Fragment>
  );
}

export default App;
