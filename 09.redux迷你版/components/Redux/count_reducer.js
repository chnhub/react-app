
const initState = 0
export default function countReducer(preState = initState, action) {
    const {type, data} = action
    console.log(preState, action);
    switch(type){
        case "increment":
            return preState + data;
        case "decrement":
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