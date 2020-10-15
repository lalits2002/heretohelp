import { RESTORE_TOKEN, SIGN_IN, SIGN_OUT } from "./actionsList";
export default function Reducer(state = {}, action) {

    if(action.type === RESTORE_TOKEN){
        return {
            ...state,
            userToken: action.token,
            isLoading: false,
          };}
    else if(action.type === SIGN_IN){
        return {
            ...state,
            isSignout: false,
            isLoading: false,
            userToken: action.token,
            authType: action.authType,
          };}
    else if(action.type ===SIGN_OUT ){
        return {
            ...state,
            isSignout: true,
            userToken: null,
            isLoading: false,
    };
    }
    else if(action.type ==='showload' ){
        return {
            ...state,
            isLoading: true,
    };
    }
   
        return {
      isLoading: false,
      isSignout: true,
      userToken: null,
    }
          
          
          
      
}