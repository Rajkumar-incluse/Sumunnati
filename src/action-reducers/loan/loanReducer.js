// import loanConstants from './loanConstants';

const initialState = []

const loanReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case loanConstants:
    //   return [...payload]

    default: return state
  }
}

export default loanReducer;