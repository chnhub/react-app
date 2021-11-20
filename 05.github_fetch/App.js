//创建外壳组件App
import React, { Component } from "react"

import Search from "./components/Github/Search"
import GitHubList from "./components/Github/List"
export default class App extends Component {


    render() {
        return (
            <div>
                <div>
                    <div className="container">
                        <Search saveUserList={this.saveUserList} saveState={this.saveState}/>
                        <GitHubList {...this.state}/>
                    </div>
                </div>
            </div>
        )
    }
}

//暴露组件
//export default App