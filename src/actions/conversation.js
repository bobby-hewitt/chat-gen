export const nextInFlow = () => {
  return dispatch => {
    dispatch({
      type: 'NEXT_IN_FLOW'
    })
  }
}

export const userResponse = (payload) => {
  return dispatch => {
    dispatch({
      type: 'USER_RESPONSE',
      payload
    })
  }
}

export const goBack = (payload) => {
  return dispatch => {
    dispatch({
      type: 'GO_BACK',
      payload
    })
  }
}

export const showFollowup = (payload) => {
  return dispatch => {
    dispatch({
      type: 'SHOW_FOLLOWUP',
      payload
    })
  }
}

export const toggleMinimise = (payload) => {
  return dispatch => {
    dispatch({
      type: 'TOGGLE_MINIMISE',
      payload
    })
  }
}

export const toggleSettings = (payload) => {
  return dispatch => {
    dispatch({
      type: 'TOGGLE_SETTINGS',
      payload
    })
  }
}
