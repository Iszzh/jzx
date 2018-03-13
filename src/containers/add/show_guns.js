import React, {Component} from 'react';
import {connect} from 'react-redux'
import ShowGuns from '../../components/add/show_guns'

@connect(
    state => ({num: state.gunReducers.num})
)

class showGunsContainer extends Component {
    render() {
        return (
            <ShowGuns num={this.props.num}></ShowGuns>
        )
    }
}

export default showGunsContainer