import { BasketProduct } from "@/features/basket/types"
import React from "react"
interface IColumnProducts {
    products: BasketProduct[]
    className: string
}
const ColumnProducts: React.FC<IColumnProducts> = ({ products, className }) => {
    return (
        <div className={`${className} px-6y py-7.1x`}>
            <ul>
                {products.map((product) => {
                    return <li key={product._id}>{product.title}</li>
                })}
            </ul>
        </div>
    )
}

export default ColumnProducts
