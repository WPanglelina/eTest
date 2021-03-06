/**
 *
 * title: VisibilityTodo.js
 *
 * author: WangPei.
 *
 * date: 2017/8/15.
 *
 */
import {connect}from "react-redux"
import {toggleTodo} from "../actions"
import TodoList from "../components/TodoList"
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case "SHOW_ALL":
            return todos;
        case "SHOW_COMPLETED":
            return todos.filter(t => t.completed);
        case "SHOW_ACTIVE":
            return todos.filter(t => !t.completed);
        default:
            throw new Error(`Unknown filter: ${filter}.`);
    }
};
const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
}

};
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
};
const VisibilityTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
export default VisibilityTodo;