import React, { Component, Fragment } from 'react'
import Child from './child'

class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 1
    }
  }

  handleButtonClick() {
    const newCounter = this.state.counter + 1
    this.setState({
      counter: newCounter
    })
  }

  // 当组件初次创建的时候，render函数会被执行一次
  // 当state中的数据发生变更的时候，render函数会被重新执行
  // 当props的数据发生变更时，render函数会被重新执行
  render() {
    return (
      <Fragment>
        <button
          onClick={this.handleButtonClick.bind(this)}
        >
        增加
        </button>
        <Child number={this.state.counter}/>
      </Fragment>
    )
  }

}

export default Counter