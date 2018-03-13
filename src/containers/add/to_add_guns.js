import React, { Component } from 'react';
import {connect} from 'react-redux'
import ToAddGuns from '@/components/add/to_add_guns'
import {addGuns, minusGuns} from "@/reducers/add/counter";

@connect(
    state=>({}),
    {addGuns, minusGuns}
)
class toAddGunsContainers extends Component{
    render(){
        return (
            <div>
                <ToAddGuns toAddGuns={this.props.addGuns} toUse="增加"></ToAddGuns>
                <ToAddGuns toMinusGuns={this.props.minusGuns} toUse="减少"></ToAddGuns>
            </div>
        )
    }
}

export default toAddGunsContainers
