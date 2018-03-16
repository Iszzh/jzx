import React, { Component } from 'react';
import { Row, Pagination } from 'antd'

class BaseList extends Component {
    constructor() {
        super()
        this.state = {}
    }

    static defaultProps = {
        search: null,
        power: null,
        status: null,
        tableData: null,
        isPage: false,
        total: 100
    }

    onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
    }

    onChange(pageNumber) {
        console.log('Page: ', pageNumber);
    }

    render() {
        const { search, power, status, tableData, total } = this.props
        return (
            <div>
                <Row type="flex">
                    { search }
                </Row>
                <Row type="flex" justify="end" align="middle">
                    { power }
                </Row>
                <Row type="flex" justify="start" align="middle">
                    { status }
                </Row>
                <Row type="flex">
                    { tableData }
                </Row>
                <Row type="flex" justify="end" align="bottom">
                    <Pagination showSizeChanger
                                showQuickJumper
                                showTotal={ (total, range) => `共 ${total} 条` }
                                onShowSizeChange={ this.onShowSizeChange }
                                onChange={ this.onChange }
                                defaultCurrent={ 1 }
                                total={ total }/>
                </Row>
            </div>
        )
    }
}

export default BaseList