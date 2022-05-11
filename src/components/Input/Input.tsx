import { InputAttributes } from 'helper/interfaces'
import React, { ChangeEvent, FC } from 'react'
import styles from './Input.module.scss'

interface InputProps {
    input: InputAttributes;
    disabled: boolean;
    defaultValue: string | number | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const Input: FC<InputProps> = ({ input, disabled, defaultValue, onChange }) => {
    return (
        <div className={styles.profile__input}>
            <label htmlFor={input.name}>{input.label}</label>
            <input
                name={input.name}
                type={input.type} 
                id={input.name}
                autoComplete="off"
                disabled={disabled}
                pattern={input.pattern}
                onChange={onChange}
                required={input.required}
                defaultValue={defaultValue}
            />
        </div>
    )
}

export default Input