import React, {Component, useContext} from 'react';

const MyContext = React.createContext()
const {Provider, Consumer} = MyContext

class A extends Component {
    state = {username: 'tom'}
    render() {
        const username = this.state.username
        return (
            <div>
                <h3>我是A组件</h3>
                <h4>my name is {username}</h4>
                <Provider value={username}>
                    <B/>
                </Provider>
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div>
                <h3>我是B组件</h3>
                <h4>A name is {this.props.username}</h4>
                <C/>
                <D/>
                <E/>
            </div>
        );
    }
}

class C extends Component {
    static contextType = MyContext
    render() {
        return (
            <div>
                <h3>我是C组件</h3>
                <h4>A name is {this.context}</h4>
            </div>
        );
    }
}

function D() {
    return (
        <div>
            <h3>我是D组件</h3>
            <Consumer>
                {value => <h4>A name is {value}</h4>}
            </Consumer>
        </div>
    );
}

function E() {
    const username = useContext(MyContext)
    return (
        <div>
            <h3>我是E组件</h3>
            <h4>A name is {username}</h4>
        </div>
    );
}

export default A;