import React from 'react'
import { Form as BaseForm } from 'antd'
import { Input } from '../Input/Input'
import { Checkbox } from '../Checkbox/Checkbox'
import { Button } from '../Button/Button'

type formPropsType = {
    className: string
}

export const Form: React.FC<formPropsType> = ({className}) => {
    return (
        <>
            <BaseForm initialValues={{remember: true}} className={className}>
                <Input/>
                <Button buttonText='Click here'></Button> 
                <Checkbox/>
            </BaseForm> 
        </>
    )
}
