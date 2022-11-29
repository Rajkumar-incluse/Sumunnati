export const root = {
  baseUrl: `http://65.2.167.209:8080/api`,
}

const endPoints = {
  createOrg: '/user/createOrg',
  forgetPass: "/user/forgot",
  // login: '/user/login',
  login: '/admin/login',

  support: "/support/support",


  // admin
  createUser: "/admin/createUser",
  getUserList: "/admin/getUser",


  // document/image upload
  doc: "/document", // ?filename=

  // loan related
  fpoList: "/loan/fpoList",
  loan: "/loan"
}

export default endPoints