import { useAppSelector } from "@/hooks/useStore"
import React, {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from "react"
import { io, Socket } from "socket.io-client"

const URL = `${process.env.REACT_APP_URL}/orders`
interface IProps {
    socket: Socket | undefined
}

const SocketContext = createContext<IProps>({} as IProps)

const SocketProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const { token } = useAppSelector((state) => state.auth)
    const [socket, setSocket] = useState<Socket | undefined>()

    useEffect(() => {
        try {
            const newSocket = io(URL, {
                extraHeaders: {
                    token: token || "",
                },
                withCredentials: true,
            })
            setSocket(newSocket)
        } catch (e: any) {
            console.log(e.message)
        }
        return () => {
            if (socket) socket.close()
        }
        // eslint-disable-next-line
    }, [token])

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    )
}

const useSocketContext = () => useContext(SocketContext)

export { SocketProvider, useSocketContext }
