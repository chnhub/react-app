import React, { Component } from 'react'
import "../index.css"
export default class Footer extends Component {

    render() {
        const {list, clearSelectList, selectAll} = this.props
        const doneCount = list.reduce((pre, cur)=>{
            return pre + (cur.done?1:0)
        }, 0)
        return (
            <div>
                <div className="todo-footer">
                    <label>
                        <input type="checkbox" onChange={(e)=>{selectAll(e.target.checked)}}/>
                    </label>
                    <span>
                        <span>已完成{doneCount}</span> / 全部{this.props.list.length}
                    </span>
                    <button className="btn btn-danger" onClick={clearSelectList}>清除已完成任务</button>
                </div>
            </div>
        )
    }
}
