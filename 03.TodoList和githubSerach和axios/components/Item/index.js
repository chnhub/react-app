import React, { Component } from 'react'
import "../index.css"
export default class Item extends Component {
    state = {
        showDelBtn: 0,
    }
    render() {
        const {row,delList} = this.props
        return (
            <div>
                <li key={row.id} style={{ backgroundColor: this.state.showDelBtn ? '#ddd' : 'white' }} onMouseEnter={() => { this.setState({ showDelBtn: 1 }) }} onMouseLeave={() => { this.setState({ showDelBtn: 0 }) }} >
                    <label>
                        <input type="checkbox" checked={row.done} onChange={(e) => { let newRow = row; newRow.done = (!row.done)?1:0; this.props.updateList(row.id, e.target.checked) }} />
                        <span>{row.text}</span>
                    </label>
                    <button className="btn btn-danger" onClick={()=>{delList(row.id)}}style={{display: this.state.showDelBtn ? "block" : "none" }}>删除</button>
                </li>
            </div>
        )
    }
}
