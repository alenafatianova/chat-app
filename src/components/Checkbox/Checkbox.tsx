import React from 'react'
import { Checkbox as BaseCheckbox, Form } from 'antd'
import { Link } from 'react-router-dom'

export const Checkbox = () => {
    return (
        <div>
            <div className="form_checkbox_item">
            <Form.Item valuePropName="checked">
            <BaseCheckbox>Remember me</BaseCheckbox>
            <Link to='/forgotPassword' className="login-form-forgot">Forgot password</Link>
            </Form.Item> 
            </div>
        </div>
    )
}
