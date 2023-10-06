import React, {
    createContext,
    Dispatch,
    PropsWithChildren,
    useContext,
    useState,
} from "react"

interface IProps {
    height: number
    setHeight: Dispatch<number>
}

const DialogContext = createContext<IProps>({} as IProps)

const DialogProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [height, setHeight] = useState<number>(0)

    return (
        <DialogContext.Provider value={{ height, setHeight }}>
            {children}
        </DialogContext.Provider>
    )
}

const useDialogContext = () => useContext(DialogContext)

export { DialogProvider, useDialogContext }
