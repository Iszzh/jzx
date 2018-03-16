import React, { Component } from 'react';
import { Button } from 'antd';

class BtnSearch extends Component {
    constructor() {
        super()
        this.state = {}
    }

    static defaultProps = {
        type: 'primary',
        icon: 'search',
        shape: null,
        btnName: '查询',
        onClick: () => {
            console.log('父组件未使用点击事件')
        },
    }

    render() {
        const { type, icon, shape, btnName, onClick } = this.props
        return (
            <Button type={ type }
                    shape={ shape }
                    icon={ icon }
                    onClick={ onClick }
            >
                { btnName }</Button>
        )
    }
}

export default BtnSearch