//创建外壳组件App
import React, { Component } from "react"

import {Link,NavLink,Switch,Route} from 'react-router-dom'
import store from "./components/Redux/store"
// import Count from "./containers/Count"
import Count from './components/Count'
export default class App extends Component {


    render() {
        return (
          <div>  
              <div>
              {/* <Count store={store}/> */}
              <Count/>
              </div>
          </div>
          
        )
    }
}

//暴露组件
//export default App