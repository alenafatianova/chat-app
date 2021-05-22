import React from 'react'
import { Form } from '../Form/Form'
import './SignIn.scss'

export const SignIn = () => {
    return (
      <section className="signin_main_container"> 
        <div className="signin_form_block">
        <div className="signin_block_head_title">
            <h2>Войти в аккаунт</h2>
            <span className="signin_form_title">Пожалуйста, войдите в свой аккаунт</span>
          </div>
          <Form className="form_signin"/>
        </div>
      </section>
    )
}
