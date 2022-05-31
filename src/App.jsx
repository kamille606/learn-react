import React, {Component} from 'react'

import Count from "./containers/Count";
import Person from "./containers/Person";
import Ant from "./conponents/Ant";
import Demo from "./conponents/1_setState";
import Hook from "./conponents/2_hooks";

import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Hook/>
                <hr/>
                <Demo/>
                <hr/>
                <Count/>
                <hr/>
                <Person/>
                <hr/>
                <Ant/>
            </div>
        )
    }
}
