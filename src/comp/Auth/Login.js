import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as LoginImg } from '../../assets/svg/auth/signup.svg';
import summunatiLogo from '../../assets/svg/Samunnati_Logo.svg';
import AnimeInputField from "../Common/AnimeInputField";

function Login() {
  const navigate = useNavigate()
  const [deatails, setDetails] = useState({
    email: '',
    pass: ''
  })

  const onChange = e => {
    setDetails(p => ({
      ...p,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = () => {
    if (deatails.email === "admin" && deatails.pass === "admin") {
      navigate('/admin/user')
    }

    if (deatails.email === "relationship_manager" && deatails.pass === "relationship_manager") {
      navigate('/relationship_manager/fpo')
    }

    if (deatails.email === "credit_manager" && deatails.pass === "credit_manager") {
      navigate('/credit_manager/fpo')
    }

    if (deatails.email === "central_co_lending_unit" && deatails.pass === "central_co_lending_unit") {
      navigate('/central_co_lending_unit/fpo')
    }

    if (deatails.email === "credit_admin_department" && deatails.pass === "credit_admin_department") {
      navigate('/credit_admin_department/fpo')
    }

    if (deatails.email === "credit_committee" && deatails.pass === "credit_committee") {
      navigate('/credit_committee/fpo')
    }

    if (deatails.email === "credit_operations" && deatails.pass === "credit_operations") {
      navigate('/credit_operations')
    }

    if (deatails.email === "operations" && deatails.pass === "operations") {
      navigate('/operations')
    }

    if (deatails.email === "sbi" && deatails.pass === "sbi") {
      navigate('/sbi')
    }
  }

  return (
    <div className="df flex-col justify-between pt-8 auth-bg h-screen bg-no-repeat bg-cover bg-center">
      <img className="h-10" src={summunatiLogo} alt="logo" />

      <div className="-mt-4 text-xl font-medium text-gray-600">Blockchain enabled co-lending platform</div>

      <div className="w-[clamp(750px,60vw,900px)] grid grid-cols-[60%_40%] bg-white rounded-2xl shadow-intensed">
        <div className="dc rounded-l-2xl bg-slate-50">
          <LoginImg className="w-full h-96" />
        </div>

        <div className="dfc p-4 text-center">
          <p className="w-fit -ml-4 py-2 px-6 bg-[#2c8c79] text-white rounded-r-full">Welcome Back</p>

          <header className="mt-8 mb-4 px-4 text-2xl">Login your account</header>

          <AnimeInputField
            wrapperCls="mx-6 my-3"
            inpCls="border-0 border-b"
            txt="Email"
            name="email"
            value={deatails.email}
            onChange={onChange}
          />

          <AnimeInputField
            wrapperCls="mx-6 my-3"
            inputType="password"
            inpCls="border-0 border-b"
            txt="Password"
            name="pass"
            value={deatails.pass}
            onChange={onChange}
          />

          <button
            className="my-6 px-8 bg-[#2c8c79] text-white hover:bg-[#1d3a34] transition-colors mx-auto rounded-full"
            onClick={onSubmit}
          >
            Login
          </button>

          <Link className="hover:text-[#2c8c79]" to='/signup'>Create Account</Link>

          <Link className="mt-auto hover:text-[#2c8c79]" to='/forget-password'>Forgot Password</Link>
        </div>
      </div>

      <div className="df pt-4 pb-1 text-gray-600">
        Designed and Developed by <strong className="text-[#2d7658] text-lg font-medium">IGC</strong>
      </div>
    </div>
  )
}

export default Login