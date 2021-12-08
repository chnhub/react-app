import React, { Component } from 'react';
import store from './store'
import {createIncrementAction, createDecrementAction, createIecrementAsyncAction} from './count_action'

export default class ReduxTest extends Component {
    state = {counts:0}

    componentDidMount(){
        store.subscribe(()=>{
            console.log("test");
            // this.render()
            // 第一种更新store值
            // this.setState({})
        })
    }

    increment = ()=>{
        // this.setState({counts:this.state.counts + this.selectNumber.value * 1})
        // store.dispatch({type:'increment', data:this.selectNumber.value * 1})
        store.dispatch(createIncrementAction(this.selectNumber.value * 1))
    }
    decrement =()=>{
        // this.setState({counts:this.state.counts - this.selectNumber.value * 1})
        // store.dispatch({type:'decrement', data:this.selectNumber.value * 1})
        store.dispatch(createDecrementAction(this.selectNumber.value * 1))

    }
    incrementIfOdd =()=>{
        if (this.state.counts % 2 !== 0){
            // this.setState({counts:this.state.counts + this.selectNumber.value * 1})
        }
        if (store.getState() % 2 !== 0){
            // this.setState({counts:this.state.counts + this.selectNumber.value * 1})
            store.dispatch({type:'incrementIfOdd', data:this.selectNumber.value * 1})
        }

    }
    incrementAsync =()=>{
        // setTimeout(() => {
            // this.setState({counts:this.state.counts + this.selectNumber.value * 1})
            // store.dispatch({type:'incrementAsync', data:this.selectNumber.value * 1})
        // }, 500);
        store.dispatch(createIecrementAsyncAction(this.selectNumber.value * 1, 500))

    }
    render() {
        return (
            <div>
                {/* <h2>counts:{this.state.counts}</h2> */}
                <h2>counts:{store.getState()}</h2>
                <select ref={c => this.selectNumber = c}>
                    <option >1</option>
                    <option >2</option>
                    <option >3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步相加</button>&nbsp;
            </div>
        );
    }
}
