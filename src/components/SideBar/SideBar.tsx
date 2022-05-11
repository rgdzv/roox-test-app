import Button from '@components/Button/Button'
import React, { FC } from 'react'
import styles from './SideBar.module.scss'

interface SideBarProps {
    sortByCity: () => void;
    sortByCompany: () => void
}

const SideBar: FC<SideBarProps> = ({ sortByCity, sortByCompany }) => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__content}>
                <p className={styles.sidebar__content__sortName}>Сортировка</p>
                <Button onClick={sortByCity}>
                    по городу
                </Button>
                <Button onClick={sortByCompany}>
                    по компании
                </Button>
            </div>
        </div>
    )
}

export default SideBar