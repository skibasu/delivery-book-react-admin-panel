import React from "react"
import BasketMenu from "../../Basket/BasketMenu"

const BasketDialog: React.FC = () => {
    return (
        <div
            className={`fixed top-[50%]  left-[50%] w-[352px] z-[100] max-h-full h-[820px] translate-x-[-50%] translate-y-[-50%]`}
            style={{
                left: "calc(50% + 500px - (500px - 352px) / 2 + 10px)",
            }}
        >
            <BasketMenu />
        </div>
    )
}

export default BasketDialog
