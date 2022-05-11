import axios from 'axios'
import { useEffect, useState } from 'react'
import { User } from './interfaces'

const useData = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const getUsers = async () => {
        try {
            const res = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users') 
            setUsers(res.data)
            setLoading(false)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.message)
            }
            if (error instanceof Error) {
                setError(error.message)
            } 
            setLoading(false)
        }
    }

    const sortByCity = () => {
        const sortedUsers = [...users].sort((a, b) => {
                if (a.address.city < b.address.city) {
                    return -1;
                }
                if (a.address.city > b.address.city) {
                    return 1;
                }
                return 0;
            }
        )
        setUsers(sortedUsers)
    }

    const sortByCompany = () => {
        const sortedUsers = [...users].sort((a, b) => {
                if (a.company.name < b.company.name) {
                    return -1;
                }
                if (a.company.name > b.company.name) {
                    return 1;
                }
                return 0;
            }
        )
        setUsers(sortedUsers)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return {users, loading, error, sortByCity, sortByCompany}
}

export default useData