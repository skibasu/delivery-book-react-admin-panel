import React, { useEffect } from "react"
import { EDialogType, useDialogContext } from "@/contexts/DialogProvider"
import AddProductsForm from "./AddProductsForm/AddProductsForm"
import CloseButton from "../../CloseButton/CloseButton"
import { Button } from "../../ui"
import { usePresence, useAnimate, AnimationSequence } from "framer-motion"

const Dialog = () => {
    const { close } = useDialogContext()
    const [isPresent, safeToRemove] = usePresence()
    const [scope, animate] = useAnimate()

    useEffect(() => {
        const sequenceIn = [
            [
                scope.current,
                {
                    opacity: [0, 1],
                },
                { duration: 0.3 },
            ],
        ] as AnimationSequence
        const sequenceOut = [
            [
                scope.current,
                {
                    opacity: [1, 0],
                },
                { duration: 0.3 },
            ],
        ] as AnimationSequence
        if (isPresent) {
            const initialAnimation = async () => {
                await animate(sequenceIn)
            }
            initialAnimation()
        } else {
            const exitAnimation = async () => {
                await animate(sequenceOut)
                safeToRemove!()
            }
            exitAnimation()
        }
        //eslint-disable-next-line
    }, [isPresent])
    return (
        <div>
            <div className="fixed h-full w-full bg-transparent z-[11] left-0 top-0 right-0 bottom-0"></div>

            <div
                ref={scope}
                className={`fixed z-20 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] shadow-lg z-[21] max-h-[820px] overflow-hidden`}
                style={{ height: "calc(100vh - 60px)" }}
            >
                <div className="flex items-center h-full ">
                    <CloseButton
                        className="absolute right-4x top-4x z-[51]"
                        onClick={() => close(EDialogType.PRODUCTS)}
                    />
                    <div className="md:w-[500px] max-w-[500px] h-full px-7x pt-[34px] pb-[50px] max-h-full overflow-y-hidden max-h-full h-full  bg-textWhite rounded-lg bg-textWhite shadow-lg relative">
                        <AddProductsForm />
                    </div>
                </div>
                <div className="flex justify-between aitems-center absolute left-7x bottom-4x right-7x pt-4x bg-textWhite border-t border-t-storm">
                    <Button
                        onClick={() => close(EDialogType.PRODUCTS)}
                        size="sm"
                        className="uppercase font-bold"
                    >
                        Close
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Dialog
