import { createAction } from "@reduxjs/toolkit"
import { IUserForList } from "@/types"

export const setUsers = createAction("SET_USERS", (users) => {
    return { payload: users }
})

export type UserAction =
    | ReturnType<typeof setUsers>

export type IAdminState = {
    users: IUserForList[] | [],
}
const initialState: IAdminState = {
    users: [],
}

const reducer = (state: IAdminState = initialState, action: UserAction) => {
    switch (action.type) {
        case setUsers.type: {
            const userArray = action.payload
            return { ...state, users: Array.isArray(userArray) ? [...userArray].reverse() : action.payload }
        }

        default: return state
    }
}

export default reducer;