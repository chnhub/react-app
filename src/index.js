//引入核心库
import React from 'react'
//引入reactdom
import ReactDOM from 'react-dom'
//引入App模块
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import store from './components/Redux/store'
import {Provider} from 'react-redux';
console.log("@");
//渲染App到界面
ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>    
    </BrowserRouter>, 
    document.getElementById('root')
)
// 第二种更新sotre内容
// store.subscribe(()=>{
//     ReactDOM.render(
//         <BrowserRouter>
//             <App/>            
//         </BrowserRouter>, document.getElementById('root')
//     )
// })
//react-redux 不再需要监控