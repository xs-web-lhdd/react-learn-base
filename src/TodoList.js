import { Component, Fragment } from "react";

class TodoList extends Component {
  // 数据驱动
  constructor(props) {
    super(props)
    // React中定义的数据要放在this.state中这是固定写法
    this.state = {
      inputValue: 'Hello World',
      list: []
    }
  }

  handleInputChange(e) {
    // React中不能直接改变state的值，需要调用一个函数进行更改
    // this.state.inputValue = e.target.value
    this.setState({
      inputValue: e.target.value
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
        />
        <ul>
          <li>learn React</li>
          <li>learn Component</li>
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;