import flow from '../data/conversation'

const initialState = {
  flow: flow,
  index: -1,
  followupIndex: -1,
  isMinimised: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_IN_FLOW':
      return {
        ...state,
        index: state.index + 1,
      }
    case 'USER_RESPONSE':
    console.log('setting resposne', action.payload)
      let newFlow = state.flow
      newFlow[state.index].selection = action.payload
      return {
        ...state,
        followupIndex: -1,
        flow: newFlow,
      }
    case 'GO_BACK':
      console.log('going back', action.payload)
      let resetFlow = state.flow
      for (var i = action.payload -1; i < resetFlow.length; i++){
        if (resetFlow[i].type === 'response'){
          console.log('resetting response')
          resetFlow[i].selection = null
        }
      }
      // resetFlow[state.index].selection = action.payload
      return {
        ...state,
        flow: resetFlow,
        index: action.payload
      }
    case 'SHOW_FOLLOWUP':
      return {
        ...state,
        followupIndex: action.payload
      }
    case 'TOGGLE_MINIMISE':
      return{
        ...state,
        isMinimised: action.payload
      }
    case 'TOGGLE_SETTINGS':
      return{
        ...state,
        isSettings: action.payload
      }
    default:
      return state
  }
}
