import { Input } from 'antd'
import React, { ChangeEvent, useCallback, useState } from 'react'
import { Button } from 'antd'
import {Form} from 'antd'
import './SignUp.scss'
import { Link } from 'react-router-dom'


export const SignUp = () => {
    // local states for inputs
    const [emailValue, setEmailValue] = useState('')
    const [nameInput, setNameInput] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')
    
    // onChange functions for inputs
    const onEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        emailValue.trim()
        setEmailValue(e.currentTarget.value)
    }, [emailValue])

    const onNameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        nameInput.trim()
        setNameInput(e.currentTarget.value)
    },[nameInput])

    const onPasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        passwordValue.trim()
        setPasswordValue(e.currentTarget.value)
    },[passwordValue])

    const onPasswordCheck = (e: ChangeEvent<HTMLInputElement>) => {
        passwordCheck.trim()
        setPasswordCheck(e.currentTarget.value)
        passwordValue.trim() === passwordCheck.trim() ? console.log('okay') : console.log('пароли не совпадают')
    }

    return (
            <section className="signup_form_container">
                <div>
                <div className="signup_form_head_title">
                    <h2>Регистрация</h2>
                    <span className="signup_form_title">Для входа в чат, Вам нужно зарегистрироваться</span>
                    </div>
                    <div className="signup_form_block">
                        <Form>
                            <Input placeholder="E-mail" value={emailValue} onChange={onEmailChange} className='signup_form_input'/>
                            <Input placeholder='Ваше имя' value={nameInput} onChange={onNameChange} className='signup_form_input'/>
                            <Input placeholder='Пароль' value={passwordValue} onChange={onPasswordChange} className='signup_form_input'/>
                            <Input placeholder='Повторите пароль' value={passwordCheck} onChange={onPasswordCheck} className='signup_form_input'/>
                            <Button type="primary" size="large" className='signup_btn_primary'>Зарегистрироваться</Button>
                        </Form>
                       <div className='link_to_signin_div'> <Link className='link_to_signin' to='/'>Войти в аккаунт</Link></div>
                    </div>
                </div>
            </section> 
    )
}
