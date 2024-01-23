import React, {
    createContext,
    Dispatch,
    PropsWithChildren,
    useContext,
    useState,
} from "react"

interface IProps {
    shiftId: string
    setShiftId: Dispatch<string>
}

const ShiftContext = createContext<IProps>({} as IProps)

const ShiftProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [shiftId, setShiftId] = useState("")

    return (
        <ShiftContext.Provider value={{ shiftId, setShiftId }}>
            {children}
        </ShiftContext.Provider>
    )
}

const useShiftContext = () => useContext(ShiftContext)

export { ShiftProvider, useShiftContext }
