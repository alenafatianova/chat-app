import { Form } from 'antd'
import React from 'react'
import './ConfirmPassword.scss'
import {ExclamationCircleTwoTone} from '@ant-design/icons'

export const ConfirmPassword = () => {
    return (
        <>
               <section className="success_form_container">
                <div>
                <div className="success_form_head_title">
                    <h2>Регистрация</h2>
                    <span className="success_form_title">Для входа в чат, Вам нужно зарегистрироваться</span>
                    </div>
                    <div className="success_form_block">
                        <Form className='confirm_block'>
                            <div className='exclamationIcon'><ExclamationCircleTwoTone style={{fontSize: '30px'}} /> </div>
                            <h3 className='confirm_account_h3'>Подтвердите свой аккаунт</h3>
                            <span className='email_sent_title'>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта </span>
                        </Form>
                    </div>
                </div>
            </section>   
        </>
    )
}
