import SideBar from '@components/SideBar/SideBar'
import List from '@components/List/List'
import React, { FC } from 'react'
import styles from './App.module.scss'
import { Routes, Route, Navigate } from "react-router-dom"
import useData from 'helper/hooks'
import UserProfile from 'pages/UserProfile/UserProfile'
import NotFound from 'pages/NotFound/NotFound'

const App: FC = () => {
    const { users, loading, error, sortByCity, sortByCompany } = useData()

    return (
        <div className={styles.container}>
            <SideBar sortByCity={sortByCity} sortByCompany={sortByCompany}/>
            <div className={styles.content}>
                <Routes>
                    <Route path="/" element={<List loading={loading} error={error} users={users}/>}/>
                    <Route path="profile/:id" element={<UserProfile users={users}/>}/>
                    <Route path="/not-found-404" element={<NotFound />} />
                    <Route path="*" element={<Navigate to="/not-found-404" />} />
                </Routes> 
            </div>
        </div>
    )
}

export default App
