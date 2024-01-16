interface ApiError {
    message: string | string[]
    error: string
    statusCode: number
}

type FilteredData = { [key in keyof typeof OrderStatus]: Order[] }
type Loading = "idle" | "pending" | "succeeded" | "failed"
