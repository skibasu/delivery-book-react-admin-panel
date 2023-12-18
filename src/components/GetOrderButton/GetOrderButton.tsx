import { getOrders } from "@/api/ordersApi"
import { useAppDispatch } from "@/hooks/useStore"

export const GetOrdersButton = () => {
    const dispatch = useAppDispatch()

    return (
        <button
            className="text-textWhite p-2y bg-sweetGrass"
            onClick={() => dispatch(getOrders())}
        >
            Get Orders
        </button>
    )
}
