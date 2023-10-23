import React, {
    createContext,
    Dispatch,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from "react"

interface IProps {
    isMounted: boolean
    setIsMounted: Dispatch<boolean>
}

const HomeContext = createContext<IProps>({} as IProps)

const HomeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [isMounted, setIsMounted] = useState(false)

    return (
        <HomeContext.Provider value={{ isMounted, setIsMounted }}>
            {children}
        </HomeContext.Provider>
    )
}

const useHomeContext = () => useContext(HomeContext)

export { HomeProvider, useHomeContext }
