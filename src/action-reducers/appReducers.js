import loginReducer from './login/loginReducer';
import adminReducer from './admin/adminReducer';

const appReducers = {
  login: loginReducer,
  admin: adminReducer,
}

export default appReducers