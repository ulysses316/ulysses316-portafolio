import { Children, createContext, useState } from 'react'

import jsonEs from '@/idioms/es.json'
import jsonEn from '@/idioms/en.json'

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

    const [idiom, setIdiom] = useState(jsonEs)

    const handdleIdiom = () => {
        if (idiom === jsonEs) {
            setIdiom(jsonEn)
        }
        else {
            setIdiom(jsonEs)
        }
    }

    return (
        <LanguageContext.Provider value={{idiom, setIdiom, handdleIdiom }}>
            {children}
        </LanguageContext.Provider>
    )
}
