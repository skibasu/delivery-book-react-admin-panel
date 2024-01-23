export interface ShiftsState {
    loading: Loading
    error: ApiError | null
    data: ShiftHistory[]
}

export interface ShiftHistory {
    _id: string
    title: string
}
