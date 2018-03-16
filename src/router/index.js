import React, { Component } from 'react';
import Index from '@/containers/home/index'
import Login from '@/containers/login/login'
import Register from '@/containers/register/register'
import { Layout, Menu, Icon } from 'antd';
import './router.css'
import { Route, HashRouter, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux'

const { SubMenu } = Menu;
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
            component: Index,
            name: '项目组',
            icon: 'user',
        }, {
            link: 'WBUSSys/BusMgr/Project',
            component: Register,
            name: '注册',
            icon: 'video-camera',
        }]
        let a = this.props.links
        a.map((m, i) => {
            a[i] = m.replace(/_/g, '/')
        })
        return (

            <Layout>
                <Sider trigger={ null } collapsible collapsed={ this.state.collapsed }>
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline">
                        {
                            a.indexOf('WBUSSys') !== -1
                                ?
                                <SubMenu key="sub1" title={ <span><Icon type="user"/>{this.state.collapsed?'':'商务管理'}</span> }>
                                    { arr.map(m => {
                                        if (a.indexOf(m.link) !== -1) {
                                            return (
                                                <Menu.Item key={ m.link }>
                                                    <Link to={ `/App/${m.link}` }>
                                                        <Icon type={ m.icon }/>
                                                        <span> { m.name } </span>
                                                    </Link>
                                                </Menu.Item>
                                            )
                                        } else {
                                            return null
                                        }
                                    }) }
                                </SubMenu>
                                : null
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={ { background: '#fff', padding: 0 } }>
                        <Icon className="trigger"
                              type={ this.state.collapsed ? 'menu-unfold' : 'menu-fold' }
                              onClick={ this.toggle }/>
                    </Header>
                    <Content style={ { margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 } }>
                        <Switch>
                            {
                                arr.map(m => {
                                    return a.indexOf(m.link) !== -1
                                        ?
                                        (
                                            <Route exact key={ m.link } path={ `/App/${m.link}` }
                                                   component={ m.component }></Route>
                                        )
                                        : null
                                })
                            }

                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default Routes