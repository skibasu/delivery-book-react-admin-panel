import { countries } from "@/components/PhoneNumberInput/countries"
import { Country } from "@/components/PhoneNumberInput/types"
import React, {
    createContext,
    Dispatch,
    PropsWithChildren,
    useContext,
    useState,
} from "react"

interface IProps {
    isOpen: boolean
    setIsOpen: Dispatch<boolean>
    currentCountry: Country
    setCurrentCountry: Dispatch<Country>
}

const PhoneNumberContext = createContext<IProps>({} as IProps)

const PhoneNumberProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [currentCountry, setCurrentCountry] = useState<Country>(countries[0])
    const [isOpen, setIsOpen] = useState(false)

    return (
        <PhoneNumberContext.Provider
            value={{
                isOpen,
                setIsOpen,
                currentCountry,
                setCurrentCountry,
            }}
        >
            {children}
        </PhoneNumberContext.Provider>
    )
}

const usePhoneNumberContext = () => useContext(PhoneNumberContext)

export { PhoneNumberProvider, usePhoneNumberContext }
