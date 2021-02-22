import { RESTORE_TOKEN, SIGN_UP, SIGN_IN, SIGN_OUT, ONBOARD, HOME } from "./actionsList";

const initial_state = {
  isLoading: true,
}

export default function Reducer(state = initial_state, action) {

    if (action.type === ONBOARD) {
      return {
        ...state,
        isSignedOut: true,
        isNewUser: true,
        isLoading: false,
        hasAccount: false,
      }
    }
    else if (action.type === SIGN_UP) {
      return {
        ...state,
        isSignedOut: true,
        isNewUser: false,
        isLoading: false,
        hasAccount: false,
      }
    }
    else if (action.type === SIGN_IN) {
      return {
        ...state,
        isSignedOut: true,
        isLoading: false,
        hasAccount: true,
        authType: action.authType,
      };
    }
    else if (action.type === SIGN_OUT) {
      return {
        ...state,
        isSignedOut: true,
        isLoading: false,
      };
    }
    else if (action.type === HOME) {
      return {
        ...state,
        isSignedOut: false,
        isLoading: false,
        hasAccount: true,
      }
    }
    else if (action.type ==='showload') {
      return {
        ...state,
        isLoading: true,
      };
    }
   
    return state;
          
}