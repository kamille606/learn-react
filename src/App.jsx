import React, {Component} from 'react'

import Count from "./containers/Count";
import Person from "./containers/Person";
import Ant from "./conponents/Ant";

import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Count/>
                <hr/>
                <Person/>
                <hr/>
                <Ant/>
            </div>
        )
    }
}
