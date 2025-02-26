import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import API_BASE_URL from '../../config'

const UserContext = createContext()

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const token = localStorage.getItem('token')
                if (token) {
                    const response = await axios.get(`${API_BASE_URL}/api/auth/verify`, {//http://13.61.148.160:3000/
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                    );
                    console.log(response)
                    if (response.data.success) {
                        setUser(response.data.user)
                    }
                } else {
                    setUser(null)
                    setLoading(false)
                }
            } catch (error) {
                console.log(error)
                if (error.response && !error.response.data.error) {
                    setUser(null)
                }

            } finally {
                setLoading(false)
            }
        }
        verifyUser()
    }, [])

    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("token")
    }
    return (
        <UserContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </UserContext.Provider>
    )
}

export const useAuth = () => useContext(UserContext)

export default AuthContext
