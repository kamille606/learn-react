import React, {Component} from 'react'
import {Button, DatePicker} from 'antd';
import {SearchOutlined, WechatOutlined, WeiboOutlined} from '@ant-design/icons'

import './App.css';

const {RangePicker} = DatePicker;

export default class App extends Component {
    render() {
        return (<div>
            App....
            <button onClick={(e) => {
                console.log(e)
            }}>点我</button>
            <Button type="primary">按钮1</Button>
            <Button>按钮2</Button>
            <Button type="link">按钮3</Button>
            <Button type="primary" icon={<SearchOutlined/>}>
                Search
            </Button>
            <WechatOutlined/>
            <WeiboOutlined/>
            <DatePicker/>
            <RangePicker/>
        </div>)
    }
}
