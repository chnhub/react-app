import axios from 'axios'
import React, { Component } from 'react'

export default class Axios extends Component {
    getData = ()=>{
        axios.get("http://localhost:3000/students").then(
            result => {console.log("成功", result.data);},
            error => {console.log("失败", error);}

        )
    }
    render() {
        return (
            <div>
                <button onClick={this.getData}>点击获取数据</button>
            </div>
        )
    }
}
