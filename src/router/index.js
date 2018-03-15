import React, { Component } from 'react';
import Index from '@/containers/home/index'
import Login from '@/containers/login/login'
import Register from '@/containers/register/register'
import { Layout, Menu, Icon } from 'antd';
import './router.css'
import { Route, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux'
const { Header, Sider, Content } = Layout;

@connect(
    state => ({ auth: state.auth.isAuth, links: state.auth.links }),
)

class Routes extends Component {
    componentWillMount() {
        console.log(this.props.links)
        // let mainData = {}
        // for (let val of links) {
        //     let arr = val.split('_')
        //     if (arr.length === 3) {
        //         if (mainData[arr[0]]) {
        //             mainData[arr[0]][arr[1]].push(arr[2]);
        //         } else if (mainData[arr[0]][arr[1]]) {
        //             mainData[arr[0]][arr[1]].push(arr[2]);
        //         } else {
        //             mainData[arr[0]] = {};
        //             mainData[arr[0]][arr[1]] = [arr[2]];
        //         }
        //     }
        // }
        // console.log(mainData)
    }

    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        let arr = [{
            link: 'WBUSSys/BusMgr/ProjectGroup',
            component: Index
        }, {
            link: 'Login',
            component: Login
        }, {
            link: 'Register',
            component: Register
        }]
        let a = this.props.links
        a.map((m, i) => {
            a[i] = m.replace(/_/g, '/')
        })
        return (
            <HashRouter>
                <Layout>
                    <Sider trigger={ null } collapsible collapsed={ this.state.collapsed } >
                        <div className="logo"/>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={ ['1'] }>
                            <Menu.Item key="1">
                                <Icon type="user"/>
                                <span>nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera"/>
                                <span>nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload"/>
                                <span>nav 3</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={ { background: '#fff', padding: 0 } }>
                            <Icon
                                className="trigger"
                                type={ this.state.collapsed ? 'menu-unfold' : 'menu-fold' }
                                onClick={ this.toggle }
                            />
                        </Header>
                        <Content style={ { margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 } }>
                            {
                                arr.map(m => {
                                    return a.indexOf(m.link) !== -1
                                        ?
                                        (
                                            <Route exact key={ m.link } path={ `/${m.link}` }
                                                   component={ m.component }></Route>
                                        )
                                        : null
                                })
                            }
                        </Content>
                    </Layout>
                </Layout>
            </HashRouter>
        )
    }
}

export default Routes