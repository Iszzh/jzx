import React, { Component } from 'react';

class addBtn extends Component {
    constructor() {
        super()
        this.state = {}
    }
    
    render() {
        return (
            <div>
                <button onClick={()=>this.props.onClick()}>增加</button>
            </div>
        )
    }
}

export default addBtn