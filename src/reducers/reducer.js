const initialState = {
  landingPage: true
}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case 'SET_LANDING_PAGE':
      return {landingPage: action.payload}
    default:
      return initialState
  }
}
