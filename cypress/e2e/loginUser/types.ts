export interface IDataHelpers {
    labelEmailClass: string[]
    inputEmailClass: string[]
    labelPasswordClass: string[]
    inputPasswordClass: string[]
    isSubmitDisabled: string
    logged?: boolean | undefined
}
export interface IData {
    email: string
    password: string
    title: string
    helpers: IDataHelpers
}
