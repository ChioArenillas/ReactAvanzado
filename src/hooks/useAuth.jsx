
import React, { useEffect, useState } from 'react'

//queremos ver si el usuario está registrado o no
export default function useAuth() {

    const [isAuth, setIsAuth] = useState(false)

    const getAuthFromBack = () => {
        return true
    }
    useEffect(() => {
        let isAuthAux = getAuthFromBack()
        setIsAuth(isAuthAux)
    }, [])
    return {isAuth}
}

