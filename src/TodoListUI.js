import React, { Component } from 'react'
import { Input, Button, List } from 'antd';

class TodoList extends Component {

  render () {
    return (
      <div style={{marginTop: '10px', marginLeft: '10px', marginRight: '10px'}} >
        <Input
          value={this.props.inputValue}
          placeholder="TodoInfo"
          style={{width: '300px', marginRight: '10px'}}
          onChange={this.props.handleInputChange}
        />
        <Button type="primary" onClick={this.props.handleButtonClick}>提交</Button>
        <List
          style={{marginTop: '10px', width: '300px'}}
          header={<div>Header</div>}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (<List.Item onClick={(index) => { this.props.handleItemDelete(index) }}>{item}</List.Item>
        )}
        />
      </div>
    )
  }
}

export default TodoList