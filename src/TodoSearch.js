import React from "react";
import './TodoSearch.css';


function TodoSearch(){
    const onChangeSearch = (event) => {
        console.log(event.target.value);
    }
    return(
        <input 
        className="TodoSearch" 
        placeholder="buscar"
        onChange={onChangeSearch}
        >

        </input>
    );
}

export { TodoSearch };