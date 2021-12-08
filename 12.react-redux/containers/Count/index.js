import {connect} from 'react-redux'
import CountUI from '../../components/CountUI'

import {createIncrementAction, createDecrementAction, createIecrementAsyncAction} from '../../components/Redux/count_action'

function mapStateToProps(state) {
    return {count:state}
}

function mapDispatchToProps(dispatch) {
    return {
        add:value=> dispatch(createIncrementAction(value)),
        decrement:value => dispatch(createDecrementAction(value)),
        // incrementIfOdd:value => dispatch(),
        incrementAsync:(value,time) => dispatch(createIecrementAsyncAction(value, time)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
