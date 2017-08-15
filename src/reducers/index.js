/**
 *
 * title: index.js
 *
 * author: WangPei.
 *
 * date: 2017/8/15.
 *
 */
import todos from "./todos"
import visibilityFilter from "./visibilityFilter"
import {combineReducers} from "redux"
const todoApp=combineReducers(
    {todos,visibilityFilter}
);
export default todoApp;