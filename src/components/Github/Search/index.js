import axios from 'axios';
import React, { Component } from 'react'

export default class Search extends Component {
    //ref 回调函数类型
    keyWordElement=""

    search = ()=>{
        //修改为加载中
        this.props.saveState({isLoading:true})
        this.props.saveState({isFirst:false})

        console.log(this.keyWordElement.value)
        //!!!仅定义了value变量
        let obj = {a:{b:{c:1}}} //连续结构赋值
        const {a:{b:data}} = obj//连续结构赋值 +重命名
        const {keyWordElement:{value:keyword}} = this
        axios.get("/github/search/users1",{
            params:{
                q:keyword            
            }
        }).then(
            result => {console.log("成功", result.data);
                this.props.saveState({responeData:result.data,isLoading:false})
            },
            error => {console.log("失败", error.message);
            this.props.saveState({error:error.message,isLoading:false})
            },  
        )
    }
    render() {
        return (
            <section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<div>
					<input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
					<button onClick={this.search}>搜索</button>
				</div>
			</section>
        )
    }
}
