import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "../index.css"
export default class Header extends Component {

    static propTypes = {
        // name:React.ProTypes.string 
        inputstr: PropTypes.func.isRequired,
    }

    addItem = (event, name) => {
        // debugger
        // this.setState({ [name]: event.target.value })
        console.log(event.nativeEvent.data);
    }
    enterClick = (e) => {
        // if(e.keyCode==13){
        if (e.keyCode === 13) {
            console.log("按了回车");
            // this.props.code(e.target.value)      
            // this.props.list = [e.target.value, ...this.props.list]  
            const item = {id:new Date().getTime(), text:e.target.value, isShowDelete: 1}  
            this.props.addList("list", item)
        }
    }
    render() {
        return (
            <div>
                <div className="todo-header">
                    <input type="text" onKeyUp={(e) => this.enterClick(e)} onChange={(event) => this.addItem(event, "inputstr")} placeholder="请输入你的任务名称，按回车键确认" />
                </div>
            </div>
        )
    }
}
