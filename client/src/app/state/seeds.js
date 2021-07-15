import { fetchFromAPI } from "./utils";

/*********************************************************************
||  Define the initial reducer state
*********************************************************************/

export const INITIAL_STATE = {
  data: [],
};

/*********************************************************************
  ||  Reducer
  *********************************************************************/
function Main(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "setSeedsField":
      return Object.assign({}, state, { [action.key]: action.val });
    default:
      return state;
  }
}

/*********************************************************************
  ||  Actions
  *********************************************************************/
export function setSeedsField(key, val) {
  return { type: "setSeedsField", key, val };
}

export function fetchSeeds() {
  return async (dispatch, getState) => {
    console.log("doin it!");
    dispatch(
      fetchFromAPI(
        "/api/seeds",
        {},
        (data) => {
          dispatch(setSeedsField("data", data));
        },
        (err) => {
          console.log(err);
        }
      )
    );
  };
}

export default Main;
