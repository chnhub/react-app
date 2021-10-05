//创建外壳组件App
import React,{Component} from "react"
import HelloApp from "./components/Hello/Hello"
import WellcomApp from "./components/Wellcom"
export default class App extends Component{
    render(){
        return(
            <div>
                 <HelloApp/>
                 <WellcomApp/>
            </div>
        )
    }
}

//暴露组件
//export default App