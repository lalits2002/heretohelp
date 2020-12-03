// import { NEW_REQUEST } from "./ActionTypeList";


export default function Reducer(state = {}, action) {
    if (action.type === 'addMedia') {

        return {
            ...state,
            [action.metadata.name]: action.metadata.url
        }
    }

    //currently this is the only action
    return state;
}