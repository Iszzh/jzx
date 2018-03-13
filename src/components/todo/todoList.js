import React, { Component } from 'react';
import AddBtn from './addBtn'
import NewList from './newList'
import InputText from './inputText'
import { connect } from 'react-redux'
import { getList, addList } from "../../reducers/todo/todo";

@connect(
    state => ({ content: state.todo.content }),
    ({ getList, addList })
)

class todoList extends Component {
    constructor() {
        super()
        this.state = {
            text: ''
        }
    }

    componentWillMount() {
        console.log(this.props.content)
    }

    handlerOnText(val) {
        this.setState({
            text: val.target.value
        })
    }

    handleSubmit() {
        let { text } = this.state
        this.props.addList({ text })
    }


    render() {
        return (
            <div>
                <InputText onText={ (e) => this.handlerOnText(e) }/>
                <AddBtn onClick={ () => this.handleSubmit() }/>
                <NewList content={ this.props.content }/>
            </div>
        )
    }
}

export default todoList