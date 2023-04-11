import { $CombinedState, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import user, { IUserState } from './user.module';
import admin, { IAdminState } from './admin.module';


const reducer = combineReducers({
    user,
    admin
});

const persistConfig = {
    key: "root",
    storage,
}

export type RootState = {
    readonly [$CombinedState]?: undefined;
} & {
    user: IUserState;
} & {
    admin: IAdminState;
}

export default persistReducer(persistConfig, reducer);