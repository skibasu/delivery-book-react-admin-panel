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

    // Do the side effect before render
    useIsomorphicLayoutEffect(() => {
        if (!locked) {
            return
        }

        // HTML and BODY elements
        const html = document.querySelector("html") as HTMLElement
        const body = document.body
        const windowHeight = window.innerHeight
        const scrollTop = window.scrollY

        const updatedOverflow =
            html.scrollHeight > window.innerHeight
                ? "scroll"
                : html.style.overflow

        // Initial styles for BODY & HTML
        const originalStyleOfHTML = {
            width: html.style.width,
            height: html.style.height,
            overflowY: html.style.overflowY,
            position: html.style.position,
        }

        const originalStyleOfBODY = {
            height: body.style.height,
            overflowY: body.style.overflowY,
            marginTop: body.style.marginTop,
            position: body.style.position,
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
            overflowY: "hidden",
            marginTop: `-${scrollTop}px`,
        }

        // Lock screen
        html.style.width = lockedStyleOfHTML.width
        html.style.height = lockedStyleOfHTML.height
        html.style.overflowY = lockedStyleOfHTML.overflowY
        html.style.position = lockedStyleOfHTML.position

        body.style.height = lockedStyleOfBODY.height
        body.style.overflowY = lockedStyleOfBODY.overflowY
        body.style.marginTop = lockedStyleOfBODY.marginTop

        return () => {
            //Unlock screen
            html.style.width = originalStyleOfHTML.width
            html.style.height = originalStyleOfHTML.height
            html.style.overflowY = originalStyleOfHTML.overflowY
            html.style.position = originalStyleOfHTML.position

            body.style.height = originalStyleOfBODY.height
            body.style.overflowY = originalStyleOfBODY.overflowY
            body.style.marginTop = originalStyleOfBODY.marginTop
            window.scrollTo(0, scrollTop)
        }
    }, [locked])

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
