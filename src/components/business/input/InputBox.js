import React, { Component } from 'react';
import './InputBox.css'
import { Input, Icon } from 'antd';

class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps = {
        placeholder: '请输入',
        size: 'default',
        icon: '',
        value: ''
    }
    render() {
        const { placeholder, size, icon, value } = this.props
        const suffix = value ? <Icon type="close-circle" onClick={ this.props.emitEmpty }/> : null;
        const prefix = icon ? <Icon type={ icon } style={ { color: 'rgba(0,0,0,.25)' } }/> : null
        return (
            <Input
                placeholder={ placeholder }
                size={ size }
                prefix={ prefix }
                suffix={ suffix }
                value={ value }
                onChange={ e => this.props.onChangeText(e) }
            />
        );
    }
}

export default InputBox