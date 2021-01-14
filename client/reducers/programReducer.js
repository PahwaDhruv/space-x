import {IS_LOADING, FETCH_PROGRAMS, FETCH_BY_YEAR, FETCH_BY_SUCCESSFUL_LAUNCH, FETCH_BY_SUCCESSFUL_LANDING} from '../actions/ActionsCreator';

const initState = {
    programs : [],
    loading : false
}

const programReducer = (state = initState, action) => {
    switch(action.type){
        case IS_LOADING : 
        return {
            ...state,
            loading : true
        }
        case FETCH_PROGRAMS :
            return {
                ...state,
                loading : false,
                programs : action.payload
            }
        case FETCH_BY_YEAR : 
            return {
                ...state,
                loading : false,
                programs : action.payload
            }
        case FETCH_BY_SUCCESSFUL_LAUNCH :
            return {
                ...state,
                loading : false,
                programs : action.payload
            }
        case FETCH_BY_SUCCESSFUL_LANDING : 
        return {
            ...state,
            loading : false,
            programs : action.payload
        }
        default :
            return state
    }
}

export default programReducer;