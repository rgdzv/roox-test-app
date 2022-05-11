import { User } from 'helper/interfaces'
import React, { FC, memo } from 'react'
import styles from './ListItem.module.scss'
import { Link } from "react-router-dom"

interface ListItemProps {
    user: User
}

const ListItem: FC<ListItemProps> = ({ user }) => {
    return (
        <div className={styles.list__item}>
            <div className={styles.list__item__info}>
                <div className={styles.list__item__block}>
                    <span>ФИО:</span>
                    <span>{user.name}</span>
                </div>
                <div className={styles.list__item__block}>
                    <span>город:</span>
                    <span>{user.address.city}</span>
                </div>
                <div className={styles.list__item__block}>
                    <span>компания:</span>
                    <span>{user.company.name}</span>
                </div>
            </div>
            <div className={styles.list__item__link}>
                <Link to={`/profile/${user.id}`}>Подробнее</Link>
            </div>
        </div>
    )
}

export default memo(ListItem)