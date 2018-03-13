import React from 'react';
import TodoList from '../../components/todo/todoList'
import { connect } from 'react-redux'

@connect(
    state => ({ auth: state.auth.isAuth })
)

class Index extends React.Component {
    render() {
        return (
            <div>
                <h2>这是首页</h2>
                { this.props.auth ? '已登录' : '未登录' }
                <TodoList/>
            </div>
        )
    }
}

export default Index