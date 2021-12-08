import {INCREMENT, DECREMENT} from './constant'
import store from './store'
// function createIncrementAction(data) {
//     return {type:'increment', data}       
// }
// function createDecrementAction(data) {
//     return {type:'decrement', data}       
// }

// export const createIncrementAction = data => ({type:'increment', data})
// export const createDecrementAction = data => ({type:'decrement', data})

export const createIncrementAction = data => ({type:INCREMENT, data})
export const createDecrementAction = data => ({type:DECREMENT, data})
export const createIecrementAsyncAction = (data, time) => {
    // return ()=>{
    //     setTimeout(() => {
    //         store.dispatch(createIncrementAction(data))
    //     }, time);
    // }
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time);
    }
}