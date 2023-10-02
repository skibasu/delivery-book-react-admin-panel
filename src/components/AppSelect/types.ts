import { OrderStatus } from "@/features/orders/types"

export enum EDataType {
    USERS = "USERS",
    STATUSES = "STATUSES",
    PAYMENTS = "PAYMENTS",
}

export type BasicStatuses =
    | OrderStatus.OPEN
    | OrderStatus.SELECTED
    | OrderStatus.DRAFT
