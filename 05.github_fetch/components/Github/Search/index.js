import axios from 'axios';
import React, { Component } from 'react'
import PubSub from 'pubsub-js';

export default class Search extends Component {
    //ref 回调函数类型
    keyWordElement=""
    // state = {
    //     responeData:[],
    //     isFirst:true,
    //     isLoading:false,
    //     error:null
    // }

    search =async ()=>{
        // const PubSub = require('search_user');


        //修改为加载中
        // this.props.saveState({isLoading:true})
        // this.props.saveState({isFirst:false})
        PubSub.publish('search_user',{isLoading:true, isFirst:false,error:null})
        console.log(this.keyWordElement.value)
        //!!!仅定义了value变量
        let obj = {a:{b:{c:1}}} //连续结构赋值
        const {a:{b:data}} = obj//连续结构赋值 +重命名
        const {keyWordElement:{value:keyword}} = this
        // axios.get("/github/search/users",{
        //     params:{
        //         q:keyword            
        //     }
        // }).then(
        //     result => {console.log("成功", result.data);
        //         // this.props.saveState({responeData:result.data,isLoading:false})

        //         PubSub.publish('search_user',{responeData:result.data,isLoading:false})
        //     },
        //     error => {console.log("失败", error.message);
        //         debugger
        //         // this.props.saveState({error:error.message,isLoading:false})
        //         PubSub.publish('search_user',{error:error.message,isLoading:false})

        //     },  
        // )
        // fetch(`/github/search/users?q=${keyword}`, {
        //     method: `get`
        // }).then(
        //     response => {
        //         console.log('联系服务器成功');
        //         return response.json()
        //     },
        // ).then(
        //     response => {
                
        //         console.log(response);
        //         PubSub.publish('search_user',{responeData:response,isLoading:false})
        //     },
        // ).catch(
        //     error => {
        //         PubSub.publish('search_user',{error:error.message,isLoading:false})

        //     }
        // )

        try {
            const response = await fetch(`/github/search/users?q=${keyword}`)
            const data = await response.json()
            PubSub.publish('search_user',{responeData:data,isLoading:false})

        } catch (error) {
            console.log('请求出错', error);
            PubSub.publish('search_user',{error:error.message,isLoading:false})

        }
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
