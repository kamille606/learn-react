import React from 'react';
import ReactDOM from "react-dom";

class HookClass extends React.Component {

    state = {count: 0}

    myRef = React.createRef()

    add = () => {
        this.setState(state => ({count: state.count + 1}))
    }

    unmount = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    show = () => {
        alert(this.myRef.current.value)
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState(state => ({count: state.count + 1}))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.myRef}/>
                <h2>当前求和为{this.state.count}</h2>
                <button onClick={this.add}>加一</button>
                <button onClick={this.unmount}>卸载</button>
                <button onClick={this.show}>点击提示</button>
            </div>
        );
    }
}

function HookFunction() {

    const [count, setCount] = React.useState(0)
    const myRef = React.useRef()

    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    function add() {
        setCount(count + 1)
        setCount(count => count + 1)
    }

    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    function show() {
        alert(myRef.current.value)
    }

    return (
        <div>
            <input type='text' ref={myRef}/>
            <h2>当前求和为{count}</h2>
            <button onClick={add}>加一</button>
            <button onClick={unmount}>卸载</button>
            <button onClick={show}>点击提示</button>
        </div>
    )
}

export default HookFunction