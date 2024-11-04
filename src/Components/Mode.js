import { createContext, useEffect, useState } from 'react'

const useMode = createContext()

export function ModeProvider({ children }) {
    const [mode, setMode] = useState(window.matchMedia('(prefers-color-scheme: light)').matches)

    useEffect(() => {
        let check = window.matchMedia('(prefers-color-scheme: light)')
        function change() {
            setMode(check.matches)
        }
        check.addEventListener('change', change)
        return () => check.removeEventListener('change', change)
    }, [])

    return (
        <useMode.Provider value={{ mode, setMode }}>
            {children}
        </useMode.Provider>
    )
}

export default useMode