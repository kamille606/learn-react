import React, {Component} from 'react'

import Count from "./conponents/Count";
import Ant from "./conponents/Ant";

import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Count/>
                {/*<Ant/>*/}
            </div>
        )
    }
}
