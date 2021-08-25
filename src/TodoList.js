import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store/index'
import { CHNAGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TPDO_ITEM, Init_List_Action } from './store/actionTypes'
import TodoListUI from './TodoListUI';
import axios from 'axios'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
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

  initListAction (data) {
    return {
      type: Init_List_Action,
      data
    }
    // store.dispatch(action)
  }

  render () {
    return (
      <TodoListUI
        list={this.state.list}
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleButtonClick={this.handleButtonClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  componentDidMount () {
    axios.get('https://www.fastmock.site/mock/9bb3d7842201f4a8971a5d62847340bb/api/list').then((res) => {
      if (res.data.code === 200) {
        const data = res.data.data
        const action = this.initListAction(data)
        store.dispatch(action)
      }
    })
  }
}

export default TodoList