import React from "react";
import { useState } from "react/cjs/react.development";

const Mock6 = () => {
    const [buttonClick,setbuttonClick] = useState(false)
    const todoList = [
        {
            id : 1,
            name : 'Breakfast',
            completed : true
        },
        {
            id : 2,
            name : 'Lunch',
            completed : true
        },
        {
            id : 1,
            name : 'Dinner',
            completed : true
        }
    ]
    const buttonHandler = () => {
         setbuttonClick(true)
    }
    return(
        <div>
            <h2>Mock6</h2>
            
            <button onClick={buttonHandler}>Todo List</button>
            <ul>
                { buttonClick &&todoList && todoList.length>1 && todoList.map((todo) => {
                    return(
                        todo.completed ? <li key={todo.id}>{todo.id}is {todo.name} is completed</li> : ''
                    )
                 })}
            </ul> 
        </div>
    )
}

export default Mock6;