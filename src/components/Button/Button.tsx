import React from 'react'
import { Button as BaseButton} from 'antd'
import './Button.scss'
import { Link } from 'react-router-dom'

type buttonProps = {
    buttonText: string;
}

export const Button: React.FC<buttonProps> = ({buttonText}) => {
    return (
        <>
           <BaseButton type='primary' size='large' className='button_primary'>
               {buttonText}
           </BaseButton> 
          <div className="register_now_link"> Or <Link to="/sign-up">register now!</Link></div>
        </>
    )
}
