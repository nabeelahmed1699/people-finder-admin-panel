import { types } from "../actions/organizationsAction/types"


const initialState= {
  ORGANIZATIONS:[]
}


export const organizationReducer = (state = initialState.ORGANIZATIONS, action) => {
  if (types.FETCH_REQUEST===action.type) {
    console.log("ORGANIZATIONS REQUESTED!")
    return state
  }
  if (types.FETCH_SUCCESS===action.type) {
    return action.payload
  }
  if (types.FETCH_FAILURE===action.type) {
    console.log("ORGANIZATION FETCH FAILURE!")
    return state
  }
  return state
}