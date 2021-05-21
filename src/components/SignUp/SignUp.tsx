import React from 'react'
import { Button } from '../Button/Button'
import './SignUp.scss'

export const SignUp = () => {
    return (
      <div className="signup_main_container"> 
        <div className="signup_form_block">
          <form className="form_signup">
            <Button buttonText='Click here'></Button> 
          </form>
        </div>
      </div>
    )
}
