import React from 'react';
import BaseList from '@/components/business/base/BaseList.js'
import InputBox from '@/components/business/input/InputBox.js'
import BtnSearch from '@/components/business/button/BtnSearch.js'
import { Row, Form, Table, Divider, Icon } from 'antd'
import { connect } from 'react-redux'

const FormItem = Form.Item;

@connect(
    state => ({ auth: state.auth.isAuth })
)

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    onChangeText(e) {
        this.setState({ text: e.target.value })
    }

    onEmitEmpty() {
        this.setState({ text: '' })
    }

    onClickBtn() {
        console.log('???')
    }

    render() {
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="#">{ text }</a>,
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a>编辑</a>
                    <Divider type="vertical"/>
                    <a>删除</a>
                    <Divider type="vertical"/>
                </span>
            ),
        }];
        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }];
        return (
            <div>
                <BaseList
                    search={
                        <Row type="flex" justify="space-between" align="middle">
                            <div style={ { marginRight: '20px' } }>
                                <InputBox placeholder={ `请输入项目组名称` }
                                          value={ this.state.text }
                                          emitEmpty={ () => this.onEmitEmpty() }
                                          onChangeText={ e => this.onChangeText(e) }/>
                            </div>

                            <BtnSearch onClick={ () => this.onClickBtn() }/>
                        </Row>
                    }
                    tableData={
                        <Table columns={ columns } dataSource={ data } pagination={ false }/>
                    }
                />

            </div>
        )
    }
}

export default Index