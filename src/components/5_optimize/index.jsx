import React, {Component} from 'react';

class Parent extends Component {

    state = {car: '奔驰'}

    changeCar = () => {
        this.setState({car: '迈巴赫'})
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state.car !== nextState.car;
    }

    render() {
        const {car} = this.state
        return (
            <div>
                <h3>我是父组件</h3>
                <h4>我的车是{car}</h4>
                <button onClick={this.changeCar}>点我换车</button>
                <Child car={car}/>
            </div>
        );
    }
}

class Child extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.car !== nextProps.car;
    }

    render() {
        return (
            <div>
                <h3>我是子组件</h3>
                <h4>我爹的车是{this.props.car}</h4>
            </div>
        );
    }
}

export default Parent;