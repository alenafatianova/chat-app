import React from 'react'
import { Form as BaseForm } from 'antd'

type formPropsType = {
    className?: string
}

export const Form: React.FC<formPropsType> = ({className, children}) => {
    return (
        <>
            <BaseForm initialValues={{remember: true}} className={className}>
                {children}
            </BaseForm>
        </>
    )
}
