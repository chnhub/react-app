//引入核心库
import React from 'react'
//引入reactdom
import ReactDOM from 'react-dom'
//引入App模块
import App from './App'
import {BrowserRouter} from 'react-router-dom'

console.log("@");
//渲染App到界面
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, 
    document.getElementById('root')
)