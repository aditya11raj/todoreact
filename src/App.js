import React from "react"
import TodoItem from "./components/todoitem"
import todoData from "./components/tododata"
import "./style.css"
function App() {
    const todoItems=todoData.map(item => <TodoItem key={item.id} item={item}/>)
    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}

export default App