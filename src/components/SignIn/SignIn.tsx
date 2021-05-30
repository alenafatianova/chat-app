import React, { ChangeEvent, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Checkbox, Form, Input, Button } from 'antd'
import {useFormik} from 'formik'
import './SignIn.scss'

type FormikTypeError = {
  email?: string
  password?: string
  rememberMe?: boolean
}

export const SignIn = () => {

  const [inputValue, setInputValue] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [isAuth, setIsAuth] = useState(false)

  const Formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    validate: (values) => {
      const errors: FormikTypeError = {}
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 3) {
        errors.password = 'Password must be more than 3 symbols';
      }
      return errors;
    },
    onSubmit: values => {
      setIsAuth(false)
    }
  })

  const authSuccess = () => {
    setIsAuth(false)
  }

  const onInputLoginChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const onPasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.currentTarget.value)
  }
    return (
      <form onSubmit={Formik.handleSubmit} className="signin_main_container"> 
      
      {isAuth && <Redirect to='/dialogs'/>}

        <div className="signin_form_block">
        <div className="signin_block_head_title">
            <h2>Войти в аккаунт</h2>
            <span className="signin_form_title">Пожалуйста, войдите в свой аккаунт</span>
          </div>
          <Form className="form_signin">
              <Form.Item  className="form_input_item" label="E-mail">
                <Input 
                    onBlur={Formik.handleBlur} 
                    allowClear={true} 
                    onChange={onInputLoginChangeValue} 
                    value={inputValue} 
                    placeholder="Введите Ваш E-mail" 
                    
                  />
              {Formik.touched.email && Formik.errors.email ? <div style={{color: 'red'}}>{Formik.errors.email}</div> : null}
              </Form.Item>

              <Form.Item className="form_input_item" label="Пароль">
                <Input.Password allowClear={true} onChange={onPasswordInputChange} value={passwordInput} placeholder="Введите Ваш пароль" />
              </Form.Item>
                <Button type='primary' size='large' onClick={authSuccess} className='signin_btn_primary'>Войти</Button> 
                <div className="register_now_link"> Или <Link to="/sign-up">зарегистрируйтесь сейчас!</Link></div>
                <div className='signin_checkbox_input_link'>
                  <Checkbox/>Запомнить меня
                  <Link to='/forgot-password' className="link_forgot_password">Забыли пароль?</Link>
                </div>
          </Form>
        </div>
      </form>
    )
}
