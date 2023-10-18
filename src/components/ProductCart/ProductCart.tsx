import { BasketProduct } from "@/features/basket/types"
import { ReactComponent as PlusIcon } from "@/assets/svg/icon-plus.svg"
import { ReactComponent as TrashIcon } from "@/assets/svg/icon-trash.svg"
import { ReactComponent as SortIcon } from "@/assets/svg/icon-sort.svg"
import React from "react"
import pizza from "@/assets/img/pizza.png"
import { useDispatch } from "react-redux"
import {
    addProductToBasket,
    removeOneProduct,
    removeProductfromBasket,
} from "@/features/basket/basketSlice"

interface IProductCart {
    addButton: boolean
}
interface IProductCart extends BasketProduct {}

const ProductCart: React.FC<IProductCart> = ({
    _id,
    title,
    price,
    description,
    addButton,
    picture,
    type,
    counter,
}) => {
    const dispatch = useDispatch()
    return (
        <div
            className="border border-storm rounded-sm flex items-stretch mb-4x py-2x transition duration-300 hover:shadow-md cursor-pointer hover:scale-[1.01] bg-textWhite"
            onClick={() =>
                addButton
                    ? dispatch(
                          addProductToBasket({
                              _id,
                              title,
                              price,
                              description,
                              addButton,
                              picture,
                              type,
                              counter,
                          })
                      )
                    : null
            }
        >
            <div className="pl-2x shrink-0 grow-0 flex items-center border-r border-r-storm">
                <div className="w-[39px] h-[39px] mr-2x rounded-full overflow-hiddden ">
                    <img
                        src={picture || pizza}
                        alt={title}
                        className="object-cover"
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
                <div className="pl-2x shrink-0 grow-0 flex items-center justify-center  border-r border-r-storm">
                    <div className="w-[25px] h-[25px] [&:hover>svg>path]:stroke-successedH pr-2x">
                        <TrashIcon
                            className="[&>path]:stroke-hellFire [&>path]:transition block w-full h-full"
                            onClick={() =>
                                dispatch(
                                    removeProductfromBasket({
                                        _id,
                                        title,
                                        price,
                                        description,
                                        addButton,
                                        picture,
                                        type,
                                        counter,
                                    })
                                )
                            }
                        />
                    </div>
                </div>
            )}
            {addButton ? (
                <div className="px-2x shrink-0 grow-0 flex items-center justify-center">
                    <p className="text-base text-medium">{price} zł</p>
                </div>
            ) : (
                <div className="px-2x shrink-0 grow-0 flex items-center justify-between overflow-hidden">
                    <div className="flex justify-center items-center border border-storm rounded-sm">
                        <p className="flex justify-center items-center text-2sm font-medium text-center">
                            <span className="block p-1x">{counter}</span>
                        </p>
                        <div className="bg-customGrayLight p-1x">
                            <SortIcon
                                className="rotate-180 mb-1x [&>path]:fill-lightStorm cursor-pointer"
                                width="8px"
                                height="8px"
                                onClick={() =>
                                    dispatch(
                                        addProductToBasket({
                                            _id,
                                            title,
                                            price,
                                            description,
                                            addButton,
                                            picture,
                                            type,
                                            counter,
                                        })
                                    )
                                }
                            />
                            <SortIcon
                                className="[&>path]:fill-lightStorm cursor-pointer"
                                width="8px"
                                height="8px"
                                onClick={() =>
                                    dispatch(
                                        removeOneProduct({
                                            _id,
                                            title,
                                            price,
                                            description,
                                            addButton,
                                            picture,
                                            type,
                                            counter,
                                        })
                                    )
                                }
                            />
                        </div>
                    </div>
                    <p className="text-sm text-medium ml-2x">
                        {counter * price} zł
                    </p>
                </div>
            )}
        </div>
    )
}

export default ProductCart
