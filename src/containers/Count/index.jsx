import CountUI from '../../conponents/Count'
import {connect} from 'react-redux'
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/count_action";

function mapStateToProps(state) {
    return {count: state}
}

function mapDispatchToProps(dispatch) {
    return {
        add: data => dispatch(createIncrementAction(data)),
        sub: data => dispatch(createDecrementAction(data)),
        addAsync: (data, time) => dispatch(createIncrementAsyncAction(data, time))
    }
}

//创建暴露count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)