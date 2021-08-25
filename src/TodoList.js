import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store/index'
import { GET_INIT_LIST } from './store/actionTypes'
import TodoListUI from './TodoListUI';
import { actionCreate } from './store/actionCreate'

class TodoList extends Component {
  
  constructor(props) {
    super(props)
    const { handleInputChange, handleButtonClick, handleItemDelete } = actionCreate()
    this.state = store.getState()
    this.handleInputChange = handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleButtonClick = handleButtonClick.bind(this)
    this.handleItemDelete = handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  handleStoreChange = () => {
    this.setState(store.getState())
  }

// 使用redux-thunk：
  // getTodoList = () => {
  //   return (dispatch) => {
  //     // 获取数据
  //     axios.get('https://www.fastmock.site/mock/9bb3d7842201f4a8971a5d62847340bb/api/list').then((res) => {
  //       if (res.data.code === 200) {
  //         const data = res.data.data
  //         const action = this.initListAction(data)
  //         dispatch(action)
  //       }
  //     })
  //   }
  // }

// 使用redux-saga：
  getInitList = (data) => {
    return {
      type: GET_INIT_LIST,
      data
    }
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
// 1、不使用中间件
    // axios.get('https://www.fastmock.site/mock/9bb3d7842201f4a8971a5d62847340bb/api/list').then((res) => {
    //   if (res.data.code === 200) {
    //     const data = res.data.data
    //     const action = this.initListAction(data)
    //     store.dispatch(action)
    //   }
    // })
// 2、使用redux-thunk中间件
    // const action = this.getTodoList()
    // store.dispatch(action)
// 3、使用redux-saga中间件
    const action = this.getInitList()
    store.dispatch(action)
  }
}

export default TodoList