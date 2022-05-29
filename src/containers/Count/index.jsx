import React, {Component} from "react";
import {connect} from 'react-redux'
import {
    createDecrementAction,
    createIncrementAction,
    createIncrementAsyncAction
} from "../../redux/count_action";

class Count extends Component {
    state = {carName: 'lain'}

    increment = () => {
        const {value} = this.selectNumber
        this.props.add(value * 1)
    }
    decrement = () => {
        const {value} = this.selectNumber
        this.props.sub(value * 1)
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.add(value * 1)
        }
    }
    incrementIfAsync = () => {
        const {value} = this.selectNumber
        this.props.addAsync(value * 1, 500)
    }

    render() {
        return (<div>
            <h1>获取react属性:{this.state.carName}</h1>
            <h1>当前求和为:{this.props.count}</h1>
            <select ref={c => this.selectNumber = c}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
            <button onClick={this.incrementIfAsync}>异步＋</button>
        </div>)
    }
}

//创建暴露count的容器组件
export default connect(
    state => ({count: state}),
    {
        add: createIncrementAction,
        sub: createDecrementAction,
        addAsync: createIncrementAsyncAction
    }
)(Count)