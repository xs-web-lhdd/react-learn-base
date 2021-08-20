import React, { Component, Fragment } from 'react';
import { Menu } from 'antd';
import logo from './logo.png';
import './style.css';

class AppHeader extends Component {
	render() {
		return (
			<Fragment>
				<img src={logo} className='app-header-logo'/>
				<Menu 
					mode="horizontal" 
					className='app-header-menu'
				>
	        <Menu.Item key="mail">
	          VOA慢速英语
	        </Menu.Item>
	        <Menu.Item key="mail1">
	          VOA慢速英语
	        </Menu.Item>
	        <Menu.Item key="mail2">
	          VOA慢速英语
	        </Menu.Item>
	        <Menu.Item key="mail3">
	          VOA慢速英语
	        </Menu.Item>
	        <Menu.Item key="mail4">
	          VOA慢速英语
	        </Menu.Item>
	        <Menu.Item key="mail5">
	          VOA慢速英语
	        </Menu.Item>
	      </Menu>
      </Fragment>
		)
	}
}

export default AppHeader;