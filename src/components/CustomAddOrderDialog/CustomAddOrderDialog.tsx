import React from "react"
import ReactDom from "react-dom"
import {
    EDialogType,
    EStatus,
    useDialogContext,
} from "@/contexts/DialogProvider"
import AddOrderForm from "./AddOrderForm/AddOrderForm"
import BasketDialog from "../BasketDialog/BasketDialog"
import CloseButton from "../CloseButton/CloseButton"

const CustomAddOrderDialog = () => {
    const { dialogAddOrderStatus, dialogAddProductsStatus, close } =
        useDialogContext()

    return dialogAddOrderStatus === EStatus.OPEN
        ? ReactDom.createPortal(
              <>
                  <div
                      data-state={dialogAddOrderStatus}
                      className="fixed bg-black/80 backdrop-blur-sm h-full w-full z-[10] left-0 top-0 right-0 bottom-0"
                  ></div>

                  <div
                      className={`fixed flex items-center z-20 left-[50%]  top-[50%]  translate-x-[-50%] translate-y-[-50%] shadow-lg z-20 max-h-[820px]`}
                      style={{ height: "calc(100vh - 60px)" }}
                  >
                      <CloseButton
                          className="absolute right-4x top-4x z-[51]"
                          onClick={() => close(EDialogType.ORDER, true)}
                      />
                      <div
                          className="md:w-[500px] max-w-[500px] px-7x pt-[34px] pb-[20px] h-full max-h-full overflow-y-auto z-50 bg-white rounded-lg bg-textWhite shadow-lg scrollbar scrollbar-w-[2px] scrollbar-thumb-storm/80 scrollbar-track-transparent"
                          data-products-status={dialogAddProductsStatus}
                          data-order-status={dialogAddOrderStatus}
                      >
                          <AddOrderForm />
                      </div>
                      {dialogAddProductsStatus === EStatus.CLOSE ? (
                          <BasketDialog />
                      ) : null}
                  </div>
              </>,
              document.getElementById("portal") as HTMLDivElement
          )
        : null
}

export default CustomAddOrderDialog
