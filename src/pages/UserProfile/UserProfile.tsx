import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import { inputsArray } from 'helper/inputs'
import { User } from 'helper/interfaces'
import React, { ChangeEvent, FC, FormEvent, memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './UserProfile.module.scss'

interface UserProfileProps {
    users: User[]
}

const UserProfile: FC<UserProfileProps> = ({ users }) => {
    const { id }= useParams()
    const [user, setUser] = useState<User>()
    const [disabled, setDisabled] = useState(true)
    const [values, setValues] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        findUser()
    }, [id, users])

    const findUser = () => {
        try {
            const properUser = [...users].find(item => item.id === Number(id)) 
            setUser(properUser)
            setLoading(false)
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            } 
            setLoading(false)
        }
    }

    const handleDisable = () => {
        setDisabled(!disabled)
    }

    const hadndleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(JSON.stringify(values, null, 2))
    }

    const inputs = inputsArray.map(input => {
        const value = (input.name === 'street' || input.name === 'city' || input.name === 'zipcode') 
            ? user?.address?.[input.name] 
            : user?.[input.name]

        return (
            <Input
                key={input.name}
                defaultValue={value} 
                input={input}
                disabled={disabled}
                onChange={hadndleChange}
            />
        )
    })

    if (loading) {
        return <div className={styles.loading}>Loading...</div>
    }

    if (error) {
        return <div className={styles.error}>{error}</div>
    }

    return (
        <div className={styles.profile}>
            <div className={styles.profile__header}>
                <p className={styles.profile__header__name}>Профиль пользователя</p>
                <Button onClick={handleDisable}>
                    Редактировать
                </Button>
            </div>
            <form className={styles.profile__form} onSubmit={handleSubmit}>
                {inputs}
                <div className={styles.profile__form__comment}>
                    <label htmlFor="comment">Comment</label>
                    <textarea 
                        id="comment" 
                        name="comment" 
                        disabled={disabled}
                        onChange={hadndleChange}
                    />
                </div>
                <Button disabled={disabled}>
                    Отправить
                </Button>
            </form>
        </div>
    )
}

export default UserProfile