import React, { Component } from 'react';

class showGuns extends Component{
    render(){
        return (
            <div>
                数量有： { this.props.num }
            </div>
        )
    }
}

export default showGuns