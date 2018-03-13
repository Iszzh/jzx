import React, { Component } from 'react';

class newList extends Component {
    constructor() {
        super()
        this.state = {}
    }

    static defaultProps = {
        content: [{ text: 'xxx' }]
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.content.map(m => {
                            return <li key={ m.text }>{ m.text }</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default newList