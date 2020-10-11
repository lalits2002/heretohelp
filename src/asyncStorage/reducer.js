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
            userToken: action.token,
          };}
    else if(action.type ===SIGN_OUT ){
        return {
            ...state,
            isSignout: true,
            userToken: null,
    };
    }
   
        return {
      isLoading: true,
      isSignout: true,
      userToken: null,
    }
          
          
          
      
}