import React, { Component } from 'react'
import "../index.css"
import Item from '../Item';
export default class List extends Component {
    state = {
        showDelBtn: 0,
    }
    addItem = () => {
        console.log("list中添加事件");
    }
    render() {
        const { list, updateList, delList } = this.props
        return (
            <div>
                <ul className="todo-main">
                    {this.props.list.map((row) => {
                        return (
                            <Item key={row.id} row={row} list={list} updateList={updateList} delList={delList} />
                        )
                    })}
                </ul>

            </div>
        )
    }
}
