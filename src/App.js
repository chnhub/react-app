//创建外壳组件App
import React, { Component } from "react"
import HelloApp from "./components/Hello/Hello"
import WellcomApp from "./components/Wellcom"
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"
import Axios from "./components/Axios"
export default class App extends Component {
    state = {
        list: [{ id: 1, text: "打代码", done:false}, { id: 2, text: "睡觉", done:false},{ id:3, text: "吃饭",done:true}],
    }
    addList = (str="list", item)=>{
        const newlist = [item, ...this.state.list]
        this.setState({list: newlist})
    }
    updateList = (id, done)=>{
        const {list} = this.state
        const newList =  list.map((row)=>{
            if(row.id === id)return {...row, done}
            else return row
        })
        this.setState({list: newList})
    }
    delList = (id)=>{
        const {list} = this.state
        const newlist = list.filter((row)=>{
            return row.id !== id
        })
        this.setState({list: newlist})
    }
    clearSelectList = ()=>{
        const {list} = this.state
        const newlist = list.filter((row)=>{
            return row.done !== true
        })
        this.setState({list: newlist})
    }
    selectAll = (done)=>{
        const {list} = this.state
        const newList =  list.map((row)=>{
            return {...row, done}
        })
        this.setState({list: newList})
    }
    render() {
        return (
            <div>
                <HelloApp />
                <WellcomApp />
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header list={this.state.list} addList={this.addList}/>
                        <List list={this.state.list} updateList={this.updateList} delList={this.delList}/>
                        <Footer list={this.state.list} clearSelectList={this.clearSelectList} selectAll={this.selectAll}/>
                    </div>
                </div>
                <Axios/>
            </div>
        )
    }
}

//暴露组件
//export default App