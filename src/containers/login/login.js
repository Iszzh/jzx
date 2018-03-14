import React from 'react';
import WrappedNormalLoginForm from '@/components/login/login'
import {connect} from 'react-redux'
import {toLogin, getLink, logOut} from "@/reducers/auth/auth";

@connect(
    state => ({auth: state.auth}),
    {toLogin, getLink, logOut}
)
class Login extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.logOut()
    }

    componentDidMount() {
        // let style = document.getElementsByClassName('login-windows-from')[0];
        // let ch = document.documentElement.clientHeight;
        // style.style.height = ch+'px'
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.auth.isAuth === true) {
            this.props.history.push('/WPTSys')
        }
        return true
    }

    _toLogin(val) {
        console.log(this.props)
        // this.props.toLogin()
        this.props.getLink(val)
        // this.props.history.push('/index')
    }

    render() {
        return (
            <div className={`login-windows-from`}>
                <WrappedNormalLoginForm toLogin={(val) => this._toLogin(val)}/>
            </div>
        )
    }
}

export default Login