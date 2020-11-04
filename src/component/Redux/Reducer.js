import { NEW_REQUEST } from "./ActionTypeList";

var ID = 0;
export default function Reducer(state = [], action) {
  if (action.type === NEW_REQUEST) {
    return [
      ...state,
      {
        data: action.payload.data,
        serviceType: action.payload.serviceType,
        resolved: false,
        id: ++ID,
      },
    ];
  }

  //currently this is the only action
  return state;
}