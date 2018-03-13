import React, { Component } from 'react';

export default class toAddGuns extends Component{

    static defaultProps = {
        toUse: '控制'
    }
    componentWillMount(){
        console.log(this.props)
    }
    _toAddGuns(){
        if(this.props.toAddGuns){
            this.props.toAddGuns()
        }
        if(this.props.toMinusGuns){
            this.props.toMinusGuns()
        }
    }
    render(){
        return (
            <div>
                <button onClick={()=>this._toAddGuns()} type="primary">{this.props.toUse}guns</button>
            </div>
        )
    }
}