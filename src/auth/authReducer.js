import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logget: true
            }
        case types.logout:
            return {
                logget: false
            }    
        default:
            return state;
    }
}