import { GET_FUNDING_ERRORS } from "../actions/types";

const initialState={}

export default function(state=initialState, action){
    switch(action.type){
        case GET_FUNDING_ERRORS:
            return action.payload
            default:
                return state
    }
}