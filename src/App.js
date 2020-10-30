import React from "react"
import { Layout, Menu } from 'antd';
import { Link, Redirect, Route } from "react-router-dom"
import {
	CustomerServiceTwoTone,
	IdcardTwoTone,
	MessageTwoTone,
	ProjectTwoTone,
	SettingTwoTone,
	SmileTwoTone,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import "./App.sass"
import HeaderContainer from "./components/Header/HeaderContainer"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import LoginContainer from "./components/Login/LoginContainer"
import { connect } from "react-redux"
import { initializeApp } from "./redux/appReducer"
import Preloader from "./components/common/Preloader/Preloader"
import logo from "./assets/logo.png";
import SettingsProfile from "./components/SettingsProfile/SettingsProfile";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class App extends React.Component {

	state = {
		collapsed: false,
	};

	componentDidMount() {
		this.props.initializeApp()
	}

	onCollapse = collapsed => {
		this.setState({ collapsed });
	};

	render() {
		const { collapsed } = this.state;
		return (
			<>
				{this.props.initialized
					? <Layout style={{ minHeight: '100vh' }}>
						<Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
							<div className="logo">
								<img src={logo} alt="logo"/>
							</div>
							<Menu className="menuWrapper" theme="dark" defaultSelectedKeys={['1']} mode="inline">
								<Menu.Item key="1" icon={<IdcardTwoTone/>}>
									<Link to="/profile">Profile</Link>
								</Menu.Item>
								<Menu.Item key="2" icon={<MessageTwoTone/>}>
									<Link to="/dialogs">Messages</Link>
								</Menu.Item>
								<Menu.Item key="3" icon={<ProjectTwoTone/>}>
									<Link to="/news">News</Link>
								</Menu.Item>
								<Menu.Item key="4" icon={<CustomerServiceTwoTone/>}>
									<Link to="/music">Music</Link>
								</Menu.Item>
								<Menu.Item key="5" icon={<SmileTwoTone/>}>
									<Link to="/users">Users</Link>
								</Menu.Item>
								<SubMenu key="sub1" icon={<SettingTwoTone/>} title="Settings">
									<Menu.Item key="6">
										<Link to="/settings/profileSettings">Profile</Link>
									</Menu.Item>
								</SubMenu>
							</Menu>
						</Sider>
						<Layout className="site-layout">
							<HeaderContainer/>
							<Content style={{ margin: '12px' }}>
								<div className="site-layout-background">
									<Route path="/profile/:userId?" component={ProfileContainer}/>
									<Route path="/dialogs" component={DialogsContainer}/>
									<Route path="/users" component={UsersContainer}/>
									<Route path="/login" component={LoginContainer}/>
									<Route path="/settings/profileSettings" component={SettingsProfile}/>
									<Redirect to="/profile"/>
								</div>
							</Content>
							<Footer style={{ textAlign: 'center' }}>©2020 Created by
								<a href="https://github.com/nazar-melnychenko" target="_blank" rel="noreferrer"> Nazar M.</a>
							</Footer>
						</Layout>
					</Layout>
					: <Preloader/>
				}
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App)
