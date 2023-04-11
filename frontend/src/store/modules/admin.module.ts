import { createAction } from "@reduxjs/toolkit"
import { IUserForList } from "@/types"

export const setUsers = createAction("SET_USERS", (users) => {
    return { payload: users }
})

export type UserAction =
    | ReturnType<typeof setUsers>

export type IAdminState = {
    users: IUserForList[] | null,
}
const initialState: IAdminState = {
    users: null,
}

const reducer = (state: IAdminState = initialState, action: UserAction) => {
    switch (action.type) {
        case setUsers.type:
            return { ...state, users: action.payload }

        default: return state
    }
}

export default reducer;