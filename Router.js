/**
 *
 * title: Router.js
 *
 * author: WangPei.
 *
 * date: 2017/7/21.
 *
 */
import React ,{Component} from "react"
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Hello from "./src/container/Hello"
import About from "./src/container/About"
export default class AppRouter extends Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path="/">
                    <IndexRoute component={Hello}/>
                    <Route path="about" component={About}/>
                </Route>
            </Router>
        );


    }
}