/**
 *
 * title: Todo.js
 *
 * author: WangPei.
 *
 * date: 2017/8/15.
 *
 */
import React from "react"
const Todo=({onClick,completed,text})=>(
    <li onClick={onClick} style={{textDecoration:completed?"line-through":"none"}}>{text}</li>
)
export default Todo;