import { ITableHeaders } from "../../types"

export const tableHeaders: ITableHeaders[] = [
    {
        width: "flex-[1_1_80px] min-w-[80px]",
        label: "Driver",
        sort: true,
        key: "selectedBy",
    },
    {
        width: "flex-[1_1_212px] min-w-[212px]",
        label: "Adress",
        sort: false,
        key: "adress",
    },
    {
        width: "flex-[1_1_192px] min-w-[192px]",
        label: "Products",
        sort: false,
        key: "products",
    },
    {
        width: "flex-[1_1_154px] min-w-[154px]",
        label: "Phone number",
        sort: false,
        key: "phoneNumber",
    },
    {
        width: "flex-[1_1_105px] min-w-[105px]",
        label: "Payment",
        sort: true,
        key: "paymentType",
    },
    {
        width: "flex-[1_1_116px] min-w-[116px]",
        label: "Created at",
        sort: true,
        key: "createdAt",
    },

    {
        width: "flex-[1_1_100px] min-w-[100px]",
        label: "Amount",
        sort: true,
        key: "price",
    },
    {
        width: "flex-[1_1_96px] min-w[96px]",
        label: "Action",
        sort: false,
        key: "actions",
    },
]
