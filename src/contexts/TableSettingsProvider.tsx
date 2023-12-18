import { OrderStatus } from "@/features/orders/types"
import React, {
    createContext,
    PropsWithChildren,
    useContext,
    useState,
} from "react"

interface IProps {
    getSortSettings: (boardType: OrderStatus) => ISortState
    setSortSettingsByBoard: (
        boardType: OrderStatus,
        payload: ISortState
    ) => void
    getActiveKey: (boardType: OrderStatus) => string
    setActiveKey: (boardType: OrderStatus, key: string) => void
}
export interface ISortState {
    createdAt: boolean
    price: boolean
    paymentType: boolean
    selectedBy: boolean
}

type IInitialState = {
    [key in OrderStatus]: ISortState
}
interface IActiveKey {
    activeKey: string
}
type IInitialKeyState = {
    [key in OrderStatus]: IActiveKey
}

const TableSettingsContext = createContext<IProps>({} as IProps)

const TableSettingsProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const initialSortState = {
        createdAt: false,
        price: false,
        paymentType: false,
        selectedBy: false,
        driver: false,
    }
    const initialKeysState = {
        [OrderStatus.OPEN]: { activeKey: "createdAt" },
        [OrderStatus.SELECTED]: { activeKey: "createdAt" },
        [OrderStatus.PENDING]: { activeKey: "createdAt" },
        [OrderStatus.DONE]: { activeKey: "createdAt" },
        [OrderStatus.DRAFT]: { activeKey: "createdAt" },
    }

    const initialState: IInitialState = {
        [OrderStatus.OPEN]: { ...initialSortState },
        [OrderStatus.SELECTED]: { ...initialSortState },
        [OrderStatus.PENDING]: { ...initialSortState },
        [OrderStatus.DONE]: { ...initialSortState },
        [OrderStatus.DRAFT]: { ...initialSortState },
    }
    const [sortSettings, setSortSettings] =
        useState<IInitialState>(initialState)
    const [activeKeys, setActiveKeys] =
        useState<IInitialKeyState>(initialKeysState)
    const getSortSettings = (boardType: OrderStatus): ISortState => {
        return sortSettings[boardType]
    }

    const getActiveKey = (boardType: OrderStatus) => {
        return activeKeys[boardType].activeKey
    }
    const setActiveKey = (boardType: OrderStatus, key: string) => {
        setActiveKeys((state) => ({
            ...state,
            [boardType]: { activeKey: key },
        }))
    }

    const setSortSettingsByBoard = (
        boardType: OrderStatus,
        payload: ISortState
    ) => {
        setSortSettings((state) => ({ ...state, [boardType]: payload }))
    }
    return (
        <TableSettingsContext.Provider
            value={{
                getSortSettings,
                setSortSettingsByBoard,
                getActiveKey,
                setActiveKey,
            }}
        >
            {children}
        </TableSettingsContext.Provider>
    )
}

const useTableSettingsContext = () => useContext(TableSettingsContext)

export { TableSettingsProvider, useTableSettingsContext }
