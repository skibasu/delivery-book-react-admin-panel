export interface ITableContent {
    id: number
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
    note: string
    user: {
        id: number
        firstName: string
        lastName: string
        url?: string
    }
}

export interface ITableHeaders {
    width: string
    label: string
    sort: boolean
    key: keyof ITableContent
}

export const tableHeaders: ITableHeaders[] = [
    {
        width: "flex-[1_1_80px] min-w-[80px]",
        label: "Driver",
        sort: true,
        key: "user",
    },
    {
        width: "flex-[1_1_212px] min-w-[212px]",
        label: "Adress",
        sort: true,
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
    ...[1, 2, 3, 4, 5, 6, 7, 8].map((i) => ({
        id: i,
        adress: {
            streetName: "Kosciuszki",
            flatNumber: "2",
            city: "Wrocław",
            houseNumber: "152",
        },
        products: ["Lorem ipsum", "Lorem Ipsum", "Lorem Ipsum dollor"],
        phoneNumber: "680-240-240",
        status: "ONLINE",
        createdAt: `${new Date(1694549775529).getHours()} : ${new Date(
            1694549775529
        ).getMinutes()}`,
        deadline: `${new Date(1694549775529).getHours()} : ${new Date(
            1694549775529
        ).getMinutes()}`,
        price: "120 zł",
        actions: { editable: true, deletable: true },
        note: i === 2 ? "Kupic fajki i flaszkę." : "",
        user: {
            id: i,
            firstName: "Adam",
            lastName: "Kowalski",
            url: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg",
        },
    })),
]
