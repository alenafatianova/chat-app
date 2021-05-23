import React from 'react'
import { Button as BaseButton} from 'antd'
import './Button.scss'
import { Link } from 'react-router-dom'

type buttonProps = {
    buttonText: string
    className?: string
}

export const Button: React.FC<buttonProps> = ({buttonText, className}) => {
    return (
        <>
           <BaseButton type='primary' size='large' className='button_primary'>
               {buttonText}
           </BaseButton> 
        </>
    )
}
