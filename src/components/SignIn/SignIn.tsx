import React from 'react'
import { Button } from '../Button/Button'
import { Checkbox } from '../Checkbox/Checkbox'
import { Form } from '../Form/Form'
import { Input } from '../Input/Input'
import './SignIn.scss'

export const SignIn = () => {
    return (
      <section className="signin_main_container"> 
        <div className="signin_form_block">
        <div className="signin_block_head_title">
            <h2>Войти в аккаунт</h2>
            <span className="signin_form_title">Пожалуйста, войдите в свой аккаунт</span>
          </div>
          <Form className="form_signin">
            <Input/>
            <Button buttonText='Click here' className='signin_btn_primary'></Button> 
            <Checkbox/> 
          </Form>
        </div>
      </section>
    )
}
