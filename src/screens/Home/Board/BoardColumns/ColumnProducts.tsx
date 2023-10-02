import { Products } from "@/features/orders/types"
import React from "react"
interface IColumnProducts {
    products: Products
    className: string
}
const ColumnProducts: React.FC<IColumnProducts> = ({ products, className }) => {
    return (
        <div className={`${className} px-6y py-7.1x`}>
            <ul>
                {products.map((product) => (
                    <li key={product}>{product}</li>
                ))}
            </ul>
        </div>
    )
}

export default ColumnProducts
