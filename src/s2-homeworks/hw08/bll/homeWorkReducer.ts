import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up'){
                return state.sort((a,b)=>a.name.charCodeAt(0) - b.name.charCodeAt(0))
            } else {
                return state.sort((a,b)=>b.name.charCodeAt(0) - a.name.charCodeAt(0))
            }
        }
        case 'check': {
            return state.filter((user) => user.age >= action.payload)
        }
        default:
            return state
    }
}
