import { OrderStatus } from "@/features/orders/types"

export const statuses: Exclude<
    OrderStatus,
    OrderStatus.DONE | OrderStatus.PENDING
>[] = [OrderStatus.OPEN, OrderStatus.DRAFT, OrderStatus.SELECTED]
