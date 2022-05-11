import ListItem from '@components/ListItem/ListItem'
import { User } from 'helper/interfaces'
import React, { FC } from 'react'
import styles from './List.module.scss'

interface ListProps {
    loading: boolean;
    error: string;
    users: User[]
}

const List: FC<ListProps> = ({ loading, error, users }) => {
    
    const usersList = users.map(user => {
        return <ListItem key={user.id} user={user}/>
    })

    if (loading) {
        return <div className={styles.loading}>Loading...</div>
    }

    if (error) {
        return <div className={styles.error}>{error}</div>
    }

    return (
        <div className={styles.list}>
            <p className={styles.list__name}>Список пользователей</p>
            <div className={styles.list__items}>
                {usersList}
            </div>
            <p className={styles.list__length}>Найдено {users.length} пользователей</p>
        </div>
    )
}

export default List