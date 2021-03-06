/**
 *
 * title: index.js
 *
 * author: WangPei.
 *
 * date: 2017/8/15.
 *
 */
let nextTodoId=0
export const addTodo=(text)=>{
    return {
        type:"ADD_TODO",
        id:(nextTodoId++).toString(),
        text
    }
};
export const setVisibilityFilter=(filter)=>{
    return {
        type:"SET_VISIBILITY_FILTER",
        filter
    }
};
export const toggleTodo=(id)=>{
    return{
        type:"TOGGLE_TODO",
        id
    }
};