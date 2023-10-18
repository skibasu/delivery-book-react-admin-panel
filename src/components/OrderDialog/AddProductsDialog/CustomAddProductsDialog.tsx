import React from "react"
import ReactDom from "react-dom"
import {
    EDialogType,
    EStatus,
    useDialogContext,
} from "@/contexts/DialogProvider"
import AddProductsForm from "./AddProductsForm/AddProductsForm"
import BasketDialog from "../../BasketDialog/BasketDialog"
import CloseButton from "../../CloseButton/CloseButton"
import { Button } from "../../ui"

const CustomAddProductsDialog = () => {
    const { dialogAddProductsStatus, close } = useDialogContext()

    return dialogAddProductsStatus === EStatus.OPEN
        ? ReactDom.createPortal(
              <div>
                  <div
                      data-state={dialogAddProductsStatus}
                      className="fixed h-full w-full bg-transparent z-[11] left-0 top-0 right-0 bottom-0"
                  ></div>

                  <div
                      data-state={dialogAddProductsStatus}
                      className={`fixed flex items-center z-20 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] shadow-lg z-[21] max-h-[820px]`}
                      style={{ height: "calc(100vh - 60px)" }}
                  >
                      <CloseButton
                          className="absolute right-4x top-4x z-[51]"
                          onClick={() => close(EDialogType.PRODUCTS, true)}
                      />
                      <div className="md:w-[500px] max-w-[500px] h-full px-7x pt-[34px] pb-[50px] max-h-full overflow-y-hidden max-h-full h-full  bg-textWhite rounded-lg bg-textWhite shadow-lg relative">
                          <AddProductsForm />
                      </div>
                      <div className="flex justify-between aitems-center absolute left-7x bottom-4x right-7x pt-4x bg-textWhite border-t border-t-storm">
                          <Button onClick={() => close(EDialogType.PRODUCTS)}>
                              Save
                          </Button>
                      </div>
                      <BasketDialog />
                  </div>
              </div>,
              document.getElementById("portal") as HTMLElement
          )
        : null
}

export default CustomAddProductsDialog
