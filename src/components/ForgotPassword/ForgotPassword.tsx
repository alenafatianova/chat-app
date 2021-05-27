import { Button, Form, Input } from 'antd'
import React, { ChangeEvent, useState } from 'react'
import './ForgotPassword.scss'

export const ForgotPassword = () => {

    const [passwordValue, setPasswordValue] = useState('')

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.currentTarget.value)
    }
    return (
        <>
        <div className="forgot_pass_main_container">
            <div className="forgot_pass_form_block">
                <div className="forgot_pass_block_head_title">
                    <h2>Забыли пароль?</h2>
                </div>
                <Form className="forgot_pass_signin" >
                    <Input allowClear={true} value={passwordValue} onChange={onPasswordChange} placeholder="Введите ваш E-mail" />
                    <Button type="primary" className='forgot_pass_btn_primary'>Сбросить пароль</Button>
                </Form>
            </div>
        </div>    
        </>
    )
}
