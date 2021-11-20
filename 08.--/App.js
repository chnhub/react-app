//创建外壳组件App
import React, { Component } from "react"

import {Link,NavLink,Switch,Route} from 'react-router-dom'
import About from "./pages/About"
import Home from "./pages/Home"
import Header from "./components/Header"
import MyNavLink from "./components/MyNavLink"
export default class App extends Component {


    render() {
        return (
            // <div>
            //     <div>
            //         <div className="container">
            //             <Search saveUserList={this.saveUserList} saveState={this.saveState}/>
            //             <GitHubList {...this.state}/>
            //         </div>
            //     </div>
            // </div>
            <div id="root">
            <div>
              <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                  <Header/>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                  <div className="list-group">
                    {/* <a className="list-group-item" href="./about.html">About</a>
                    <a className="list-group-item active" href="./home.html">Home</a> */}
                    {/* <Link className="list-group-item" to="/about">About</Link>
                    <Link className="list-group-item" to="/home">Home</Link> */}
                    {/* <NavLink activeClassName="my-active" className="list-group-item" to="/about">About</NavLink>
                    <NavLink activeClassName="my-active" className="list-group-item" to="/home">Home</NavLink> */}
                    <MyNavLink to="/about/hahah">About</MyNavLink>
                    <MyNavLink to="/home">Home</MyNavLink>

                  </div>
                </div>
                <div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                          {/* switch 单一匹配 */}
                            <Switch> 
                              <Route path="/about" component={About}/>
                              <Route path="/home" component={Home}/>
                            </Switch>
                           
                            {/* <Route path="/home" component={Home}/> */}
                        </div>
                    </div>
                </div>
            </div>
              </div>
            </div>
          </div>
        )
    }
}

//暴露组件
//export default App