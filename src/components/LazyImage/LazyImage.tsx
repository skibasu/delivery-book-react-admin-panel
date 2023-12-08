import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"
import { useAnimate, AnimationSequence } from "framer-motion"

interface ILazyImage {
    src: string
    alt: string
    className?: string
}
const LazyImage: React.FC<ILazyImage> = ({ alt, className, src }) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [scope, animate] = useAnimate()

    useEffect(() => {
        const img = new Image()
        img.src = src
        img.onload = () => {
            img.complete && setIsLoaded(true)
        }
    }, [src])

    useEffect(() => {
        const sequenceIn = [
            [
                scope.current,
                {
                    opacity: [0, 1],
                },
                { duration: 1 },
            ],
        ] as AnimationSequence

        if (isLoaded) {
            const initialAnimation = async () => {
                await animate(sequenceIn)
            }
            initialAnimation()
        }
        //eslint-disable-next-line
    }, [isLoaded])
    return (
        <div className={cn("overflow-hiddden", className)}>
            {isLoaded ? (
                <img
                    ref={scope}
                    src={src}
                    alt={alt}
                    className={`opacity-0 object-cover`}
                />
            ) : (
                <div
                    className={cn(
                        "animate-pulse bg-customGrayLight/70 overflow-hiddden",
                        className
                    )}
                />
            )}
        </div>
    )
}

export default LazyImage
