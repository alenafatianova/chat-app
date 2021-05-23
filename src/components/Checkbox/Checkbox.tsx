import React from 'react'
import { Checkbox as BaseCheckbox } from 'antd'
import { Link } from 'react-router-dom'

export const Checkbox = () => {
    return (
        <div className="checkbox">
            <BaseCheckbox>Remember me</BaseCheckbox>
            <Link to='/forgotPassword' className="">Forgot password</Link>
        </div>
    )
}
