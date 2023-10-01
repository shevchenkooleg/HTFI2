import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'
import {Modifier} from "../../Stand";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

const xTypeInterface: Record<string, string> = {
    'red': s.red,
    'secondary': s.secondary
}

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}


const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps
    }
) => {

    const finalClassName = `
        ${s.button}
        ${s.default}
        ${className ? className : ''} 
        ${xType ? xTypeInterface[xType] : ''} 
        ${disabled ? s.disabled : ''}
    `

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps}
        />
    )
}

export default SuperButton
