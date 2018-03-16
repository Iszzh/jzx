import React, { Component } from 'react';
import Routes from '@/router/index.js'
import Login from '@/containers/login/login'
import { Route, HashRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

@connect(
    state => ({ auth: state.auth.isAuth, links: state.auth.links }),
)

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <div style={ { height: '100%' } }>
                    <Route exact path={ `/Login` } component={ Login }></Route>
                    {
                        this.props.auth ? <Route path={ `/App` } component={ Routes }></Route> : null
                    }
                    { /*<Route path={ `/App` } component={ Routes }></Route>*/ }
                    { /*<Routes></Routes>*/ }
                </div>
            </HashRouter>
        )
    }
}