import React, { Component } from 'react';
import Index from '@/containers/home/index'
import Login from '@/containers/login/login'
import Register from '@/containers/register/register'
import { Route, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { setAuth } from "@/reducers/auth/auth";

@connect(
    state => ({ auth: state.auth.isAuth, links: state.auth.links }),
    ({ setAuth })
)

class Routes extends Component {

    componentWillMount() {
        const loadState = () => {
            const serializedState = sessionStorage.getItem('state');
            if (serializedState === null) {
                return { isAuth: false, links: ['Login'] };
            } else {
                return JSON.parse(serializedState);
            }
        }
        this.props.setAuth(loadState())
    }

    render() {
        let arr = [{
            link: 'Index',
            component: Index
        }, {
            link: 'Login',
            component: Login
        }, {
            link: 'Register',
            component: Register
        }]
        let a = this.props.links
        return (
            <HashRouter>
                <div>
                    {
                        arr.map(m => {
                            return a.indexOf(m.link) !== -1
                                ?
                                (
                                    <Route key={ m.link } path={ `/${m.link}` } component={ m.component }></Route>
                                )
                                : null
                        })
                    }
                </div>
            </HashRouter>
        )
    }
}

export default Routes