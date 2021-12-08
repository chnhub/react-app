import {INCREMENT, DECREMENT} from './constant'

const initState = 0
export default function countReducer(preState = initState, action) {
    const {type, data} = action
    console.log(preState, action);
    switch(type){
        // case "increment":
        case INCREMENT:
            return preState + data;
        // case "decrement":
        case DECREMENT:
            return preState - data;
        case "incrementIfOdd":
            // if (preState %2 !== 0 ) {
                return preState + data;
            // }
            // break;
        case "incrementAsync":
            return preState + data;
        default:
            return preState
            
            
    }
}