import React, { Component } from 'react'
import {connect} from 'react-redux'

import {createIncrementAction, createDecrementAction, createIecrementAsyncAction} from '../../components/Redux/count_action'

class CountUI extends Component {

    increment = ()=>{
   
        // store.dispatch(createIncrementAction(this.selectNumber.value * 1))
        this.props.add(this.selectNumber.value * 1)
    }
    decrement =()=>{

        // store.dispatch(createDecrementAction(this.selectNumber.value * 1))
        this.props.decrement(this.selectNumber.value * 1)
    }
    incrementIfOdd =()=>{

        // if (store.getState() % 2 !== 0){
        if (this.props.count % 2 !== 0){
            // store.dispatch({type:'incrementIfOdd', data:this.selectNumber.value * 1})
            this.props.add(this.selectNumber.value * 1)
        }

    }
    incrementAsync =()=>{

        // dispatch(createIecrementAsyncAction(this.selectNumber.value * 1, 500))
        this.props.incrementAsync(this.selectNumber.value * 1, 500)
    }
    render() {
        return (
            <div>
                <div>
                {/* <h2>counts:{this.state.counts}</h2> */}
                <h2>counts:{this.props.count}</h2>
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
            </div>
        )
    }
}

export default connect(
    state => ({count:state}), 
    {
        add:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createDecrementAction,
    }
    // mapDispatchToProps
)(CountUI)
