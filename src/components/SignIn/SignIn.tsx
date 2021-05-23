import React, { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import { Checkbox, Form, Input } from 'antd'
import './SignIn.scss'

export const SignIn = () => {
  const [inputValue, setInputValue] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const onInputLoginChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value)
  }
  const onPasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setPasswordInput(e.currentTarget.value)
  }
    return (
      <section className="signin_main_container"> 
        <div className="signin_form_block">
        <div className="signin_block_head_title">
            <h2>Войти в аккаунт</h2>
            <span className="signin_form_title">Пожалуйста, войдите в свой аккаунт</span>
          </div>
          <Form className="form_signin">
              <Form.Item className="form_input_item" label="Username">
                <Input allowClear={true} onChange={onInputLoginChangeValue} value={inputValue} placeholder="Введите Ваше имя или логин" />
              </Form.Item>

              <Form.Item className="form_input_item" label="Password">
                <Input.Password allowClear={true} onChange={onPasswordInputChange} value={passwordInput} placeholder="Введите Ваш пароль" />
              </Form.Item>
                <Button buttonText='Click here' className='signin_btn_primary'></Button> 
                <div className="register_now_link"> Or <Link to="/sign-up">register now!</Link></div>
                <div className='signin_checkbox_input_link'>
                  <Checkbox/>Remember me
                  <Link to='/forgotPassword' className="link_forgot_password">Forgot password</Link>
                </div>
                
          </Form>
        </div>
      </section>
    )
}
