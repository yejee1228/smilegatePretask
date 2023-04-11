import { createAction } from "@reduxjs/toolkit"
import { IUser } from "@/types"

export const setUser = createAction("SET_USER", ({ user, saved }) => {
    return { payload: { user, saved } }
})
export const setInitialState = createAction("SET_INITIALSTATE")

export type UserAction =
    | ReturnType<typeof setUser>
    | ReturnType<typeof setInitialState>

export type IUserState = {
    user: IUser | null,
    saved: boolean,
}
const initialState: IUserState = {
    user: null,
    saved: false,
}

const reducer = (state: IUserState = initialState, action: UserAction) => {
    switch (action.type) {
        case setUser.type:
            return { ...state, user: action.payload.user, saved: action.payload.saved }

        case setInitialState.type:
            return { state: initialState }
        default: return state
    }
}

export default reducer;