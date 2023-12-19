import { BasketProduct } from "@/features/basket/types"
import { formatZlotyCurrency } from "@/helpers/helpers"
import React, { useEffect, useState } from "react"
interface IColumnProducts {
    products: BasketProduct[]
    className: string
}
const ColumnProducts: React.FC<IColumnProducts> = ({ products, className }) => {
    const [total, setTotal] = useState<number>(0)
    useEffect(() => {
        setTotal(products.reduce((a, b) => a + b.counter * b.price, 0))
    }, [products])
    return (
        <div className={`${className} px-6y py-7.1x`}>
            <ul>
                {products.map((product) => {
                    return (
                        <li
                            key={product._id}
                            className="mb-3x flex justify-between"
                        >
                            <span>{`${product.counter} * ${product.title}: `}</span>
                            <span>
                                {" "}
                                {`${formatZlotyCurrency(
                                    product.price * product.counter
                                )}`}
                            </span>
                        </li>
                    )
                })}
                <li
                    key="totalz000"
                    className="mt-4x pt-2x border-t border-t-gray flex justify-between -mb-6x"
                >
                    <span>Total :</span>
                    <span>{formatZlotyCurrency(total)}</span>
                </li>
            </ul>
        </div>
    )
}

export default ColumnProducts
