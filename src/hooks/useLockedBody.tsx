import { Dispatch, useEffect, useState } from "react"
import { useIsomorphicLayoutEffect } from "./useisomorphicLayoutEffect"
interface UseLockedBodyOutput {
    locked: boolean
    setLocked: Dispatch<boolean>
}

export function useLockedBody(
    initialLocked = false,
    rootId = "root" // Default to `___gatsby` to not introduce breaking change
): UseLockedBodyOutput {
    const [locked, setLocked] = useState<boolean>(initialLocked)
    const [wh, setWh] = useState<number>(window.innerHeight)

    // Do the side effect before render
    const onResize = () => {
        setWh(window.innerHeight)
    }
    useIsomorphicLayoutEffect(() => {
        window.addEventListener("resize", onResize)

        if (!locked) {
            return
        }

        // HTML and BODY elements
        const html = document.querySelector("html") as HTMLElement
        const body = document.body
        const main = document.querySelector("main") as HTMLElement

        const windowHeight = wh
        const scrollTop = window.scrollY
        const updatedOverflow =
            html.scrollHeight > window.innerHeight
                ? "scroll"
                : html.style.overflow

        const originalMainOverflow = main.style.overflow
        // Initial styles for BODY & HTML
        const originalStyleOfHTML = {
            width: html.style.width,
            height: html.style.height,
            overflowY: html.style.overflowY,
            position: html.style.position,
        }

        const originalStyleOfBODY = {
            height: body.style.height,
            overflow: body.style.overflow,
            marginTop: body.style.marginTop,
        }

        // Locked styles for BODY & HTML
        const lockedStyleOfHTML = {
            width: "100%",
            height: `${windowHeight}px`,
            overflowY: updatedOverflow,
            position: "fixed",
        }

        const lockedStyleOfBODY = {
            height: `${windowHeight + scrollTop}px`,
            overflow: "hidden !important",
            marginTop: `-${scrollTop}px`,
        }

        // Lock screen
        main.style.overflow = "hidden"
        body.style.height = lockedStyleOfBODY.height
        body.style.overflow = lockedStyleOfBODY.overflow
        body.style.marginTop = lockedStyleOfBODY.marginTop

        html.style.width = lockedStyleOfHTML.width
        html.style.height = lockedStyleOfHTML.height
        html.style.overflowY = lockedStyleOfHTML.overflowY
        html.style.position = lockedStyleOfHTML.position

        return () => {
            //Unlock screen
            html.style.width = originalStyleOfHTML.width
            html.style.height = originalStyleOfHTML.height
            html.style.overflowY = originalStyleOfHTML.overflowY
            html.style.position = originalStyleOfHTML.position

            body.style.height = originalStyleOfBODY.height
            body.style.overflow = originalStyleOfBODY.overflow
            body.style.marginTop = originalStyleOfBODY.marginTop

            main.style.overflow = originalMainOverflow
            window.scrollTo(0, scrollTop)
            window.removeEventListener("resize", onResize)
        }
    }, [locked, wh])

    // Update state if initialValue changes
    useEffect(() => {
        if (locked !== initialLocked) {
            setLocked(initialLocked)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialLocked])

    return { locked, setLocked }
}

export default useLockedBody
