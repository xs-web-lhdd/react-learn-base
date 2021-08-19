import React, { Component, Fragment } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 1
    }
  }

  handleButtonClick() {
    const newCounter = this.state.counter + 1
    console.log(this.divElem.innerHTML);
    // setState是异步的
    // this.setState({
    //   counter: newCounter
    // })
    // console.log(this.divElem.innerHTML);

// 可以让setState里面写函数，第二个函数是等第一个函数执行完才会执行 
    this.setState(() => {
      return {
        counter: newCounter
      }
    }, () => {
      console.log(this.divElem.innerHTML);
    })
  }

  // 当组件初次创建的时候，render函数会被执行一次
  // 当state中的数据发生变更的时候，render函数会被重新执行
  // 当props的数据发生变更时，render函数会被重新执行

  // ref能获得元素标签的dom
  // ref写在html标签上，获取的是dom节点
  // ref写在组件标签上，获取的是组件的js实例
  render() {
    return (
      <Fragment>
        <button
          onClick={this.handleButtonClick.bind(this)}
          // ref={(button) => {this.buttonElem = button}}
        >
        增加
        </button>
        <div
          ref={(div) => {this.divElem = div}}
        >
          {this.state.counter}
        </div>
      </Fragment>
    )
  }

}

export default Counter