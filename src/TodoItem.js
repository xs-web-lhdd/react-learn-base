import React, { Component } from 'react'

class TodoItem extends Component {

  constructor(props) {
    super(props)

    this.handleItemClick = this.handleItemClick.bind(this)

  }

  handleItemClick() {
    // 改变父组件中的list数据
    // 子组件想要和父组件通信，它要调用父组件传递过来的方法
    const { index, deleteFunction} = this.props
    deleteFunction(index)
  }
  
  render() {
    return (
      <li
        dangerouslySetInnerHTML={{__html: this.props.content}}
        onClick={this.handleItemClick}
      >
      </li>
    )
  }

}

export default TodoItem