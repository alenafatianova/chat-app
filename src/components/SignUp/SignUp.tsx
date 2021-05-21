import React from 'react'
import { Button } from '../Button/Button'
import './SignUp.scss'

export const SignUp = () => {
    return (
      <section className="signup_main_container"> 
        <div className="signup_form_block">
        <div className="signup_block_head_title">
            <h2>Войти в аккаунт</h2>
            <span>Пожалуйста, войдите в свой аккаунт</span>
          </div>
          <form className="form_signup">
            <Button buttonText='Click here'></Button> 
          </form>
        </div>
      </section>
    )
}
