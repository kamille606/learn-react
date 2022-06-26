import React, {Component} from 'react'

import Count from './containers/Count'
import Person from './containers/Person'
import Ant from './components/Ant'
import AntUpload from './components/Ant_upload'
import Demo from './components/1_setState'
import Hook from './components/2_hooks'
import A from './components/4_context'
import Parent from './components/5_optimize'
import RP from './components/6_renderProps'

import './App.css';

export default class App extends Component {
    render() {
        return (
            <>
                {/*<AntUpload/>*/}
                <RP/>
                {/*<Parent/>*/}
                {/*<hr/>*/}
                {/*<A/>*/}
                {/*<hr/>*/}
                {/*<Hook/>*/}
                {/*<hr/>*/}
                {/*<Demo/>*/}
                {/*<hr/>*/}
                {/*<Count/>*/}
                {/*<hr/>*/}
                {/*<Person/>*/}
                {/*<hr/>*/}
                {/*<Ant/>*/}
            </>
        )
    }
}
