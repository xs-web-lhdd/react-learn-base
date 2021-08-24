import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import store from './store/index'
import { CHNAGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TPDO_ITEM } from './store/actionTypes'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  handleInputChange (e) {
    const action = {
      type: CHNAGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action)
  }

  handleStoreChange () {
    this.setState(store.getState())
  }

  handleButtonClick () {
    const action = {
      type: ADD_TODO_ITEM
    }
    store.dispatch(action)
  }

  handleItemDelete (index) {
    const action = {
      type: DELETE_TPDO_ITEM,
      index
    }
    store.dispatch(action)
  }


  render () {
    return (
      <div style={{marginTop: '10px', marginLeft: '10px', marginRight: '10px'}} >
        <Input
          placeholder="TodoInfo"
          style={{width: '300px', marginRight: '10px'}}
          onChange={this.handleInputChange}
        />
        <Button type="primary" onClick={this.handleButtonClick}>提交</Button>
        <List
          style={{marginTop: '10px', width: '300px'}}
          header={<div>Header</div>}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>
      )}
    />
      </div>
    )
  }
}

export default TodoList