import React from 'react'
import { Button as BaseButton} from 'antd'
import './Button.scss'

type buttonProps = {
    buttonText: string
    className?: string
}

export const Button: React.FC<buttonProps> = ({buttonText}) => {
    return (
        <>
           <BaseButton type='primary' size='large' className='button_primary'>
               {buttonText}
           </BaseButton> 
        </>
    )
}
