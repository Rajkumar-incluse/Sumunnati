import sendApiReq from '../../utils/sendApiReq';
import endPoints from '../../utils/endPoints';
import adminConstants from './adminConstants';
import loginConstants from '../login/loginConstants';

export function registerUser(data, onSuccess) {
  return async dispatch => {
    try {
      const payload = await sendApiReq({
        method: 'post',
        url: endPoints.createUser,
        // headers: { 'content-type': 'multipart/form-data' },
        data,
      })

      console.log(payload)
      dispatch({
        type: adminConstants.ADD_USER,
        payload
      })
      onSuccess()

    } catch (error) {
      console.log('error')
      console.log(error)
    }
  }
}

export function editUser(data) {
  return async dispatch => {
    try {
      const payload = await sendApiReq({
        method: 'post',
        url: endPoints.editUser,
        data,
      })

      console.log(payload)
      dispatch({
        type: loginConstants.LOGIN_SUCCESSFUL,
        payload: {
          firstName: data.firstName,
          lastName: data.lastName,
          token: data.token,
          role: data.role,
          userId: data.userId,
          email: data.email
        }
      })

    } catch (error) {
      console.log(error)
    }
  }
}

export function getUsersList(onSuccess) {
  return async dispatch => {
    try {
      const data = await sendApiReq({
        url: endPoints.getUserList,
      })

      dispatch({
        type: adminConstants.GET_USERS,
        payload: data
      })

      onSuccess()
    } catch (error) {
      console.log(error)
    }
  }
}

export async function getSupport(data, onSuccess) {
  console.log(data);
  try {
    const payload = await sendApiReq({
      method: 'post',
      url: endPoints.support,
      data,
    })

    console.log(payload)
    onSuccess()
  } catch (error) {
    console.log(error)
  }
}