import { Component, Fragment } from "react";
import './style.css'
import TodoItem from "./TodoItem";

class TodoList extends Component {
  // 数据驱动
  constructor(props) {
    super(props)
    // bind(this)性能优化
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
    // React中定义的数据要放在this.state中这是固定写法
    this.state = {
      inputValue: '',
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
    if (e.keyCode === 13 && e.target.value !== '') {
      const list = [...this.state.list, this.state.inputValue]
      this.setState({
        list: list,
        inputValue: ''
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

  getListItems() {
    return this.state.list.map((value, index) => { // map记得要return
      return (
        <TodoItem
          content={value}
          key={index}
          index={index}
          deleteFunction={this.handleItemClick}
        />
      )
    })
  }

  render() {
    return (
      <Fragment>
        {/* label中的for在React中不能用for要用htmlFor */}
        <label htmlFor="myinput">请输入内容：</label>
        {/* JSX中JS表达式要写在{}里面 */}
        <input
          id="myinput"
        // 添加样式的时候不能用class，React会觉得跟定义类的class混淆
          className="input"
          value={this.state.inputValue}
          // 通过bind改变this的指向
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyUp}
        />
        <ul>
          {this.getListItems()}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;