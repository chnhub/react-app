import React,{Component} from "react"
import index from "./index.module.css"
export default class WellcomApp extends Component{
    render(){
        return(
            <div>
                <h2 className="wellcom">
                    test,header
                </h2>
                <h2 className={index.wellcom}>
                    样式模块化,header
                </h2>
            </div>
        )
    }
}

