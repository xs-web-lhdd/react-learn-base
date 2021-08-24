import React, { Component, Fragment } from 'react'
import './style.css'
// 引入动画组件
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  handleAddItem () {
    this.setState((preState) => {
      return {
        list: [...preState.list, 'item']
      }
    })
  }

  render () {
    return (
      <Fragment>
        {/* 单个元素： */}
        {/* <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames="my-node"
        >
          <div>hello</div>
        </CSSTransition> */}
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                timeout={1000}
                classNames="my-node"
                key={index}
              >
                <div>{item}</div>
              </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        {/* <div className={this.state.show ? 'show' : 'hide'}>hello</div> */}
        <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>
    )
  }
} 

export default App