/**
 *
 * title: index.js
 *
 * author: WangPei.
 *
 * date: 2017/7/20.
 *
 */
import React from 'react'
import { render } from 'react-dom'
import AppRouter from "../Router"
import todoApp from "./reducers"
import App from "./components/App"
import {Provider} from "react-redux"
import {createStore} from "redux"
// let store=createStore(todoApp)
const store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/*
render(
    <AppRouter />,
    document.getElementById('app')
);*/
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("app")
)
