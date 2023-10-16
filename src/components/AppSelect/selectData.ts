import { MenuProductType } from "@/features/basket/types"
import { OrderStatus, PaymentType } from "@/features/orders/types"

export const statuses: Exclude<
    OrderStatus,
    OrderStatus.DONE | OrderStatus.PENDING
>[] = [OrderStatus.OPEN, OrderStatus.DRAFT, OrderStatus.SELECTED]

export const payments: PaymentType[] = [
    PaymentType.CARD,
    PaymentType.CASH,
    PaymentType.ONLINE,
    PaymentType.PAYED,
]

export const categories = [
    MenuProductType.PIZZA,
    MenuProductType.DRINKS,
    MenuProductType.OTHERS,
]
