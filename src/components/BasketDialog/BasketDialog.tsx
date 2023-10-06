import React from "react"
import ReactDom from "react-dom"
import BasketMenu from "../Basket/BasketMenu"
import { useAppSelector } from "@/hooks/useStore"
import { useDialogContext } from "@/contexts/DialogProvider"

interface IAdddOrderButtonDialog {
    title?: string
}
const BasketDialog: React.FC<IAdddOrderButtonDialog> = ({ title }) => {
    const { orders } = useAppSelector((state) => state.basket)
    const { height } = useDialogContext()
    return orders.length > 0
        ? ReactDom.createPortal(
              <div
                  className={`fixed left-[50%] top-[50%]  w-[352px] z-[100]`}
                  style={{
                      height,
                      maxHeight: height,
                      transform: `translate( calc( 50%  - ${
                          (500 - 352) / 2 + 352 - 520
                      }px), -50%)`,
                  }}
              >
                  <BasketMenu />
              </div>,
              document.getElementsByTagName("body")[0] as HTMLElement
          )
        : null
}

export default BasketDialog
