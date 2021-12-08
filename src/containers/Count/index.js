import {connect} from 'react-redux'
import CountUI from '../../components/CountUI'

import {createIncrementAction, createDecrementAction, createIecrementAsyncAction} from '../../components/Redux/count_action'

const mapStateToProps = state => ({count:state})

function mapDispatchToProps(dispatch) {
    return {
        add:value=> dispatch(createIncrementAction(value)),
        // add:createIncrementAction,
        decrement:value => dispatch(createDecrementAction(value)),
        // incrementIfOdd:value => dispatch(),
        incrementAsync:(value,time) => dispatch(createIecrementAsyncAction(value, time)),

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
