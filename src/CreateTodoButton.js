import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton () {

    const onClickButton = (msg) => {
        alert(msg);
    }
    return (
        <button 
        className="CreateTodoButton" 
        type="button"
        onClick={() => onClickButton('hola mundo')}
        >
            +
        </button>
    )
}

export { CreateTodoButton };