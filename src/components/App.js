/**
 *
 * title: App.js
 *
 * author: WangPei.
 *
 * date: 2017/8/15.
 *
 */
import React ,{Component} from "react"
import AddTodo from "../containers/AddTodo"
import VisibilityTodo from "../containers/VisibilityTodo"
import Footer from "./Footer"
export default class App extends Component{
    render(){
        return (
            <div>
                <AddTodo/>
                <VisibilityTodo/>
                <Footer/>
            </div>
        );
    }
}