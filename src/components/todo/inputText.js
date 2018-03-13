import React, { Component } from 'react';

class inputText extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                <textarea onChange={(e)=>this.props.onText(e)}></textarea>
            </div>
        )
    }
}

export default inputText