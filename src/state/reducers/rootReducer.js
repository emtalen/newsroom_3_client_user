import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ARTICLE_DATA':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default rootReducer