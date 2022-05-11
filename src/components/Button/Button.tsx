import React, { FC } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
    children: string;
    onClick?: () => void;
    disabled?: boolean
}

const Button: FC<ButtonProps> = ({ children, onClick, disabled }) => {
    return (
        <>
            <button 
                className={children === 'Отправить' ? styles.button__submit : styles.button}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        </>
    )
}

export default Button