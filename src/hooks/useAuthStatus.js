import { useEffect, useState, useRef } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)
    const iSMounted = useRef(true)

    useEffect(() => {

      if(iSMounted) {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setLoggedIn(true)
                
            }
                setCheckingStatus(false)
            })
        }

        return () => {
            iSMounted.current = false
        }
    }, [iSMounted])

  return { loggedIn, checkingStatus }
}


