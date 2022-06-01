import React, {Component} from 'react';

class Parent extends Component {

    state = {car: '奔驰'}

    changeCar = () => {
        this.setState({car: '迈巴赫'})
    }

    render() {
        return (
            <div>
                <h3>我是父组件</h3>
                <h4>我的车是{this.state.car}</h4>
                <button onClick={this.changeCar}>点我换车</button>
                <Child/>
            </div>
        );
    }
}

class Child extends Component {
    render() {
        return (
            <div>
                <h3>我是子组件</h3>
            </div>
        );
    }
}

export default Parent;