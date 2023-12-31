import { MenuProductType } from "./features/basket/types"

export const menu = {
    PIZZA: [
        {
            _id: "651c10c3ad93487697e63f75",
            title: "Margarita",
            price: 35,
            description: "Ser mozzarella, sos pomidorowy, oregano",
            type: MenuProductType.PIZZA,
            counter: 1,
        },
        {
            _id: "651c11885abd05675bf3ece6",
            title: "Fungi",
            price: 42,
            description: "Ser mozzarella, pieczarki, sos pomidorowy, oregano",
            type: MenuProductType.PIZZA,
            counter: 1,
        },
        {
            _id: "651c11e9a9513edf54ecf76f",
            title: "Parma",
            price: 62,
            description:
                "Ser mozzarella, szynka parmenska, rukola, parmezan, sos pomidorowy, oregano",
            type: MenuProductType.PIZZA,
            counter: 1,
        },
    ],
    DRINKS: [
        {
            _id: "651c1563a96c9e3b59812cd2",
            title: "Coca Cola",
            price: 10,
            description: "Coca Cola 0.5l",
            type: MenuProductType.DRINKS,
            counter: 1,
        },
        {
            _id: "651c1579a96c9e3b59812cd4",
            title: "Fanta",
            price: 10,
            description: "Fanta 0.5l",
            type: MenuProductType.DRINKS,
            counter: 1,
        },
    ],
    OTHERS: [
        {
            _id: "651c151ea96c9e3b59812cd0",
            title: "Gyros Drobiowy",
            price: 50,
            description: "Gyros, frytki, surowki, sos",
            type: MenuProductType.OTHERS,
            counter: 1,
        },
        {
            _id: "651c1508a96c9e3b59812cce",
            title: "Kebab Wolowy",
            price: 50,
            description: "Kebab, frytki, surowki, sos",
            type: MenuProductType.OTHERS,
            counter: 1,
        },
    ],
}
