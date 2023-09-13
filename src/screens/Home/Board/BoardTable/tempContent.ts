export interface ITableContent {
    adress: {
        streetName: string
        flatNumber: string
        city: string
        houseNumber: string
    }
    products: string[]
    phoneNumber: string
    status: string
    createdAt: string
    deadline: string
    price: string
    actions: { editable: boolean; deletable: boolean }
}

export interface ITableHeaders {
    width: string
    label: string
    sort: boolean
    key: keyof ITableContent
}

export const tableHeaders: ITableHeaders[] = [
    {
        width: "flex-[1_1_282px] min-w-[282px]",
        label: "Adress",
        sort: true,
        key: "adress",
    },
    {
        width: "flex-[1_1_202px] min-w-[202px]",
        label: "Products",
        sort: false,
        key: "products",
    },
    {
        width: "flex-[1_1_154px] min-w-[154px]",
        label: "Phone number",
        sort: true,
        key: "phoneNumber",
    },
    {
        width: "flex-[1_1_105px] min-w-[105px]",
        label: "Payment",
        sort: true,
        key: "status",
    },
    {
        width: "flex-[1_1_116px] min-w-[116px]",
        label: "Created at",
        sort: true,
        key: "createdAt",
    },
    {
        width: "flex-[1_1_105px] min-w-[105px]",
        label: "Deadline",
        sort: true,
        key: "deadline",
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

export const tableContent: ITableContent[] = [
    ...[1, 2, 3, 4, 5, 6, 7, 8].map(() => ({
        adress: {
            streetName: "Kosciuszki",
            flatNumber: "2",
            city: "Wrocław",
            houseNumber: "152",
        },
        products: ["Lorem ipsum", "Lorem Ipsum", "Lorem Ipsum dollor"],
        phoneNumber: "680-240-240",
        status: "ONLINE",
        createdAt: "1694549775529",
        deadline: "1694549775529",
        price: "120",
        actions: { editable: true, deletable: true },
    })),
]
