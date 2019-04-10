import flow from '../data/conversation'

const initialState = {
  flow: flow,
  index: -1,
  colors: null,
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

      //sort followups
      let newFlow = state.flow
      newFlow[state.index].selection = action.payload
      let item = newFlow[state.index].options[newFlow[state.index].selection]
      let followups = item.followups      
      if (followups){
        newFlow.splice(state.index + 1,0, ...followups)
      }
      let colors;
      console.log(newFlow[state.index])
      //UI actions
      if(newFlow[state.index].uiAction === 'colors'){
        console.log('colors')
        colors = {
          primary: item.primary, 
          secondary : item.secondary
        }
      }


      
      

      return {
        ...state,
        colors: colors || state.colors,
        followupIndex: -1,
        flow: newFlow,
      }
    case 'GO_BACK':
      //TODO, remove followups in a more effective way
      const indecies = []
      let resetFlow = state.flow
      for (var i = action.payload -1; i < resetFlow.length; i++){
        if (resetFlow[i].isFollowup){
          indecies.push(i)

        }
        if (resetFlow[i].type === 'response'){
          resetFlow[i].selection = null
        }
      }
      for (var i = 0; i < indecies.length; i++){
        if (i > 0){
          resetFlow.splice(indecies[i] - i, 1)
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
