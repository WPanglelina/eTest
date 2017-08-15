/**
 *
 * title: TodoList.js
 *
 * author: WangPei.
 *
 * date: 2017/8/15.
 *
 */
import React from "react"
import Todo from "./Todo"
const TodoList =({todos,onTodoClick})=>(
    <ul>
        {todos.map(todo=>
            <Todo key={todo.id} {...todo} onClick={()=>onTodoClick(todo.id)}/>
        )}
    </ul>
)
export default TodoList;