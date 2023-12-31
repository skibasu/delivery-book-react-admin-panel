export const phoneNumberMobilePlRegex = /(^[4-7][0-9]\d{7}$)/
export const minimum3Characters = /^.{3,}$/
export const localNumberMobilePlRegex =
    /\b(^[1][2-9]|[2-8][0-9]|[9][0-1])\d{7}$\b/

export const otherNumbersRegex = /^[0-9]{4,15}$/
export const nunberWithOptionalLetterOnTheEnd = /(^[0-9]{1,7}[A-Za-z]?$)/
export const decimalNumberRegex =
    /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/

export const noDoubleSpacesRegex = /\s\s+/g
export const firstSpaceRegex = /^\s/
export const lastSpaceRegex = /\s$/
// Phone number PL - mobile
// 45x do 79x. length = 9

// Phone number PL - local
//12 do 91
