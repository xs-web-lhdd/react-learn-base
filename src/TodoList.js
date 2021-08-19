import { Component, Fragment } from "react";

class TodoList extends Component {
  // 数据驱动
  constructor(props) {
    super(props)
    // React中定义的数据要放在this.state中这是固定写法
    this.state = {
      inputValue: 'Hello World',
      list: ['learn React', 'learn Component', 'learn React Dom']
    }
  }

  handleInputChange(e) {
    // React中不能直接改变state的值，需要调用一个函数进行更改
    // this.state.inputValue = e.target.value
    this.setState({
      inputValue: e.target.value
    })
  }
  handleKeyUp(e) {
    if (e.keyCode === 13) {
      const list = [...this.state.list, this.state.inputValue]
      this.setState({
        list: list
      })
    }
  }
  handleItemClick(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }

  render() {
    return (
      <Fragment>
        {/* JSX中JS表达式要写在{}里面 */}
        <input 
          value={this.state.inputValue}
          // 通过bind改变this的指向
          onChange={this.handleInputChange.bind(this)}
          onKeyUp={this.handleKeyUp.bind(this)}
        />
        <ul>
          {this.state.list.map((value, index) => { // map记得要return
            // 循环要加key值，会让React性能更高
            return (
              <li 
                key={index} 
                onClick={this.handleItemClick.bind(this, index)}
              >
                {value}
              </li>
            )
          })}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;