import sendApiReq from '../../utils/sendApiReq';
import endPoints from '../../utils/endPoints';
import loanConstants from './loanConstants';

export function registerUser(data, onSuccess) {
  return async dispatch => {
    try {
      const payload = await sendApiReq({
        method: 'post',
        url: endPoints.createUser,
        headers: { 'content-type': 'multipart/form-data' },
        data,
      })

      console.log(payload)
      // dispatch({
      //   type: adminConstants.ADD_USER,
      //   payload
      // })
      // onSuccess()

    } catch (error) {
      console.log(error)
    }
  }
}
