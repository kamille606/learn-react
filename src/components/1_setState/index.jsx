import React, {Component} from 'react';

class Demo extends Component {

    state = {count: 0}

    add = () => {
        //第一种方式
        const {count} = this.state
        this.setState({count: count + 1}, () => {
            console.log(this.state.count)
        })
        //第二种方式
        this.setState((state, props) => {
            console.log(state, props)
            return {count: state.count + 1}
        }, () => {
            console.log(this.state.count)
        })
        //异步更新
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                count:{this.state.count}
                <button onClick={this.add}>加一</button>
            </div>
        );
    }
}

export default Demo;