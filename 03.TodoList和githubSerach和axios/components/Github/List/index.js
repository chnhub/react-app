import React, { Component } from 'react'
import "./index.css"
export default class GitHubList extends Component {
    render() {
        const {responeData, isFirst, isLoading, error} = this.props
        debugger
        let userlist = responeData["items"]
        
        return (
            <div className="row">
                {
                    isFirst?<h2>第一次加载</h2>:
                    isLoading?<h2>加载中...</h2>:
                    error?<h2 style={{color:"red"}}>{error}</h2>:
                    userlist?
                        userlist.map((item) => {
                            return(
                            <div key={item.id} className="card">
                                <a rel="noreferrer" href={item.html_url} target="_blank">
                                    <img alt="head_portrait" src={item.avatar_url} style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{item.login}</p>
                            </div>
                            )    
                        }):null
                    
                }

                 
            </div>
        )
    }
}
