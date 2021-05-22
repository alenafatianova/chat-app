import React, { ChangeEvent, useState } from 'react'
import {Form, Input as BaseInput} from 'antd'


export const Input = () => {

    const [inputValue, setInputValue] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const onInputLoginChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }
    const onPasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordInput(e.currentTarget.value)
    }

    return (
        <>
           <Form.Item className="form_input_item" label="Username">
                <BaseInput allowClear={true} onChange={onInputLoginChangeValue} value={inputValue} placeholder="Введите Ваше имя или логин" />
        </Form.Item>

        <Form.Item className="form_input_item" label="Password">
                <BaseInput.Password allowClear={true} onChange={onPasswordInputChange} value={passwordInput} placeholder="Введите Ваш пароль" />
      </Form.Item>
        </>
    )
}
