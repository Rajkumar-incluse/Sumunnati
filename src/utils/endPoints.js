export const root = {
  baseUrl: `http://13.127.115.134:8080/api`,
}

const endPoints = {
  createOrg: '/user/createOrg',
  forgetPass: "/user/forgot",
  // login: '/user/login',
  login: '/admin/login',

  // admin
  createUser: "/admin/createUser",
  getUserList: "/admin/getUser",

  // relationship manager
}

export default endPoints