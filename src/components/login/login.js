import React, { Component } from 'react';
import './login.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

const FormItem = Form.Item;

class Login extends Component {
    constructor() {
        super()
        this.state = {
            user:'admin',
            pwd:'123456'
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.toLogin(values)
                console.log('Received values of form: ', values);
            } else {

            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={ `login-window` }>
                <Form onSubmit={ this.handleSubmit } className="login-form">
                    <FormItem>
                        { getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入用户名!' }],
                        })(
                            <Input size="large" prefix={ <Icon type="user" style={ { color: 'rgba(0,0,0,.25)' } }/> }
                                   placeholder="请输入用户名"/>
                        ) }
                    </FormItem>
                    <FormItem>
                        { getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入你的密码!' }],
                        })(
                            <Input size="large" prefix={ <Icon type="lock" style={ { color: 'rgba(0,0,0,.25)' } }/> } type="password"
                                   placeholder="请输入你的密码"/>
                        ) }
                    </FormItem>
                    <FormItem>
                        { getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住密码</Checkbox>
                        ) }
                    </FormItem>
                    <FormItem>
                        <Button size="large" type="primary" htmlType="submit" className="login-form-button">
                            登 录
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(Login)

export default WrappedNormalLoginForm