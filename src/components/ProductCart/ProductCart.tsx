import { BasketProduct } from "@/features/basket/types"
import { ReactComponent as PlusIcon } from "@/assets/svg/icon-plus.svg"
import React from "react"
import pizza from "@/assets/img/pizza.png"
import { useDispatch } from "react-redux"
import { addProductToBasket } from "@/features/basket/basketSlice"

interface IProductCart {
    addButton: boolean
}
interface IProductCart extends BasketProduct {}

const ProductCart: React.FC<IProductCart> = ({
    title,
    price,
    description,
    addButton,
    picture,
    type,
}) => {
    const dispatch = useDispatch()
    return (
        <div
            className="border border-storm rounded-sm flex items-stretch mb-4x py-2x transition duration-300 hover:shadow-md cursor-pointer hover:scale-[1.01] bg-textWhite"
            onClick={() =>
                dispatch(
                    addProductToBasket({
                        title,
                        price,
                        description,
                        addButton,
                        picture,
                        type,
                    })
                )
            }
        >
            <div className="pl-2x shrink-0 grow-0 flex items-center border-r border-r-storm">
                <div className="w-[39px] h-[33px] pr-2x">
                    <img
                        src={picture || pizza}
                        alt={title}
                        className="block w-full h-full"
                    />
                </div>
            </div>

            <div className="px-2x grow flex items-center">
                <div>
                    <h2 className="text-medium text-sm">{title}</h2>
                    <p className="text-2sm">{description}</p>
                </div>
            </div>
            {addButton ? (
                <div className="pl-2x shrink-0 grow-0 flex items-center justify-center  border-r border-r-storm">
                    <div className="w-[25px] h-[25px] [&:hover>svg>path]:stroke-successedH pr-2x">
                        <PlusIcon className="[&>path]:stroke-successed [&>path]:transition block w-full h-full" />
                    </div>
                </div>
            ) : (
                <div className="pl-2x shrink-0 grow-0 flex items-center justify-center  border-r border-r-storm" />
            )}

            <div className="px-2x shrink-0 grow-0 flex items-center justify-center">
                <p className="text-base text-medium">{price} zł</p>
            </div>
        </div>
    )
}

export default ProductCart
