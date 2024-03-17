

export type LoadingStateType = {
    isLoading: boolean
}

const initState: LoadingStateType = {
    isLoading: false
}

export type LoadingReducerActionType = LoadingActionType
export const loadingReducer = (state = initState, action: LoadingReducerActionType): LoadingStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {...state, isLoading: action.isLoading}
        }

        default:
            return state
    }
}

export type LoadingActionType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => ({
    type: 'CHANGE_LOADING',
    isLoading
}as const)
