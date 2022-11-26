import loanConstants from './loanConstants';

const initialState = {
  fpoList: [],
  loanList: {
    in_process: [],
    rejected: [],
    granted: []
  }
}

const loanReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case loanConstants.GET_FPO:
      return {
        ...state,
        fpoList: [
          ...payload
        ]
      }

    case loanConstants.GET_LOAN_BY_STATUS:
      return {
        ...state,
        loanList: {
          ...state.loanList,
          [payload.status]: [...payload.data]
        }
      }

    default: return state
  }
}

export default loanReducer;