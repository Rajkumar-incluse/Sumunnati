import { useId, useState } from 'react';
import loginConstants from '../../action-reducers/login/loginConstants';
import loginReducer from '../../action-reducers/login/loginReducer';
import uerImg from '../../assets/img/user/user3.png';
import store from '../../utils/store';
import { useSelector } from 'react-redux';
import { editUser } from '../../action-reducers/admin/adminAction';
import { useDispatch } from "react-redux";

function Input({ name = '', label = '', value = '', onChange, readOnly }) {
  const id = useId()

  return (
    <div className='df gap-4 my-4'>
      <label
        htmlFor={id}
        className='w-32 mb-0 shrink-0 cursor-pointer'
      >
        {label}
      </label>

      <strong>:</strong>

      <input
        type="text"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    </div>
  )
}

function Settings() {
  const [show, setShow] = useState("profile")
  const [edit, setEdit] = useState(false)
  const user = useSelector(({ login }) => login.userDetails)
  const [details, setDetails] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: '',
    oldPassword: '',
    newPassword: '',
    token: user.token,
    role: user.role,
    userId: user.userId
  })

  const dispatch = useDispatch()

  const updateEdit = () => {
    setEdit(p => !p)
  }

  const updateUserDetails = () => {
    setEdit(p => !p)
    const data = {
      firstName: details.firstName,
      lastName: details.lastName,
      email: details.email,
      phone: '098743589891',
    }
    console.log(data);
    dispatch(editUser(data));
  }

  const onChange = e => {
    setDetails(p => ({
      ...p,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className='h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='max-w-xl my-8 mx-auto p-8 bg-white rounded-2xl'>
        <img className='w-40 h-40 mx-auto rounded-full' src={uerImg} alt="user" />
        <div className='dc gap-6 font-semibold text-lg my-4'>
          <p
            onClick={() => setShow("profile")}
            className={`${show === "profile" ? "text-[#678b3b]" : ""} cursor-pointer`}
          >
            Profile
          </p>
          <p
            onClick={() => setShow("password")}
            className={`${show === "password" ? "text-[#678b3b]" : ""} cursor-pointer`}
          >
            Password Reset
          </p>
        </div>

        {
          show === "profile" &&
          <>
            <Input
              name="firstName"
              label='First Name'
              value={details.firstName}
              onChange={onChange}
              readOnly={!edit}
            />

            <Input
              name="lastName"
              label='Last Name'
              value={details.lastName}
              onChange={onChange}
              readOnly={!edit}
            />

            <Input
              name="email"
              label='Email'
              value={details.email}
              onChange={onChange}
              readOnly={!edit}
            />

            <Input
              name="phone"
              label='Phone number'
              value={details.phone}
              onChange={onChange}
              readOnly={!edit}
            />

            {
              !edit &&
              <button
                className='block mx-auto bg-[#a3dc5d] hover:bg-[#678b3b]'
                onClick={updateEdit}
              >
                Edit
              </button>
            }

            {
              edit &&
              <div className='dc gap-4'>
                <button
                  className='block bg-[#a3dc5d] hover:bg-[#678b3b]'
                  onClick={updateEdit}
                >
                  Cancel
                </button>

                <button
                  className='block bg-[#a3dc5d] hover:bg-[#678b3b]'
                  onClick={updateUserDetails}
                >
                  Update
                </button>
              </div>
            }
          </>
        }


        {
          show === "password" &&
          <>
            <Input
              name="oldPassword"
              label='Old Password'
              value={details.oldPassword}
              onChange={onChange}
              readOnly={!edit}
            />
            <Input
              name="newPassword"
              label='New Password'
              value={details.newPassword}
              onChange={onChange}
              readOnly={!edit}
            />

            <button
              className='block mx-auto bg-[#a3dc5d] hover:bg-[#678b3b]'
            >
              Update
            </button>
          </>
        }
      </div>
    </section>
  )
}

export default Settings