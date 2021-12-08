import {INCREMENT, DECREMENT} from './constant'
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