import React, {Component} from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {

  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value * 1
    const personObj = {id: nanoid(), name, age}
    this.props.addPerson(personObj)
    this.nameNode.value = ''
    this.ageNode.value = ''
  }

  render() {
    return (
      <div>
        <h2>我是Person组件</h2>
        <h3>count组件和为{this.props.count}</h3>
        <input ref={c => this.nameNode = c} type="text" placeholder="输入名字"/>
        <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄"/>
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.persons.map((p) => {
              return <li key={p.id}>{p.name}--{p.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    persons: state.persons,
    count: state.count,
  }),
  {
    addPerson,
  },
)(Person)