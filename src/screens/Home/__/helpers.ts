export const getRounded = (counter: number, max: number): string => {
    const isRoundedLeft = counter === 0 ? "rounded-l-sm" : ""
    const isRoundedRight = counter === max ? "rounded-r-sm" : ""
    let roundedClass = ""
    if (!!isRoundedLeft) {
        roundedClass += ` ${isRoundedLeft}`
    }
    if (!!isRoundedRight) {
        roundedClass += ` ${isRoundedRight}`
    }
    roundedClass = roundedClass !== " " ? roundedClass : ""
    return roundedClass
}
