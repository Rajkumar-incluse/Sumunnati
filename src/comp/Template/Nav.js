import { useNavigate } from 'react-router-dom';
import { ReactComponent as Notification } from '../../assets/svg/common/notification.svg';
import { ReactComponent as TriArrow } from '../../assets/svg/arrows/traiangle.svg';
import { ReactComponent as Search } from '../../assets/svg/common/search.svg';
import { DropDownWrapper } from '../UIComp/DropDown';
import { useSelector } from 'react-redux';

function Nav({ userType = "" }) {
  const user = useSelector(({ login }) => login.userDetails)
  const navigate = useNavigate()

  const onClk = val => {
    if (val === "Profile") {
      navigate(`/${userType}/setting`)
    } else if (val === 'Log out') {
      navigate('/')
    }
  }

  console.log(user)
  return (
    <nav className='df gap-8 px-6 py-2 shadow-lg'>
      <div className='df gap-px pl-2 border rounded'>
        <Search className='w-4 h-4' />
        <input
          type="text"
          className='border-none py-1'
          placeholder='Search'
        />
      </div>

      <Notification className='ml-auto' />

      <div className='df'>
        <div>
          <p>Raj kumar</p>
          <p className='text-sm'>Head of the department</p>
        </div>

        <DropDownWrapper
          list={["Profile", "Log out"]}
          rootCls='p-0'
          needArrow
          onClk={onClk}
        >
          <TriArrow />
        </DropDownWrapper>
      </div>
    </nav>
  )
}

export default Nav