import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
                return state.sort((a,b)=> {
                    let result = 0
                    for (let i = 0; i < Math.max(a.name.length, b.name.length) - Math.abs(a.name.length - b.name.length); i++){
                        if (a.name.charCodeAt(i) !== b.name.charCodeAt(i)){
                                if (action.payload === 'up') result = a.name.charCodeAt(i) - b.name.charCodeAt(i)
                                if (action.payload === 'down') result = b.name.charCodeAt(i) - a.name.charCodeAt(i)
                            break
                        }
                    }
                    return result
                })
        }
        case 'check': {
            return state.filter((user) => user.age >= action.payload)
        }
        default:
            return state
    }
}
