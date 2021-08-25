import React, { Component } from 'react'
import { Input, Button, List } from 'antd';


// 无状态组件替换普通组件
// 优势：性能比较高
const TodoList = (props) => {
  return (
    <div style={{marginTop: '10px', marginLeft: '10px', marginRight: '10px'}} >
      <Input
        value={props.inputValue}
        placeholder="TodoInfo"
        style={{width: '300px', marginRight: '10px'}}
        onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleButtonClick}>提交</Button>
      <List
        style={{marginTop: '10px', width: '300px'}}
        header={<div>Header</div>}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={(index) => { props.handleItemDelete(index) }}>{item}</List.Item>
      )}
      />
    </div>
  )
}


// class TodoList extends Component {

//   render () {
//     return (
//       // <div style={{marginTop: '10px', marginLeft: '10px', marginRight: '10px'}} >
//       //   <Input
//       //     value={this.props.inputValue}
//       //     placeholder="TodoInfo"
//       //     style={{width: '300px', marginRight: '10px'}}
//       //     onChange={this.props.handleInputChange}
//       //   />
//       //   <Button type="primary" onClick={this.props.handleButtonClick}>提交</Button>
//       //   <List
//       //     style={{marginTop: '10px', width: '300px'}}
//       //     header={<div>Header</div>}
//       //     bordered
//       //     dataSource={this.props.list}
//       //     renderItem={(item, index) => (<List.Item onClick={(index) => { this.props.handleItemDelete(index) }}>{item}</List.Item>
//       //   )}
//       //   />
//       // </div>
//     )
//   }
// }

export default TodoList