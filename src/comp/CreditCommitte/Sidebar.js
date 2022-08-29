import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as Dashboard } from '../../assets/svg/common/dashboard.svg';
import { ReactComponent as Setting } from '../../assets/svg/common/setting.svg';
import { ReactComponent as Support } from '../../assets/svg/common/support.svg';
import { ReactComponent as Loan } from '../../assets/svg/common/loan.svg';
import { ReactComponent as Dpr } from '../../assets/svg/common/dpr.svg';
import summunatiLogo from '../../assets/svg/Samunnati_Logo.svg';

const list = [
  {
    title: "Dashboard",
    icon: <Dashboard />,
    to: '/credit_committee/dashboard'
  },
  {
    title: "FPO Info",
    icon: <Dpr />,
    to: '/credit_committee/fpo'
  },
  {
    title: "Loan",
    icon: <Loan />,
    to: '/credit_committee/loan'
  },
  {
    title: "Loan account details",
    icon: <Loan />,
    to: '/credit_committee/loan-details'
  },
  {
    title: "Support",
    icon: <Support />,
    to: '/credit_committee/support'
  },
  {
    title: "Settings",
    icon: <Setting />,
    to: '/credit_committee/setting'
  },
]

function Sidebar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <aside className='dfc px-2 pb-4 bg-[#d8f9b5] text-sm'>
      <img className='w-40 mt-3 mb-8 mr-auto' src={summunatiLogo} alt="Sumunnati Logo" />

      {
        list.map(l => (
          <div
            key={l.title}
            className={`df px-4 py-2 cursor-pointer ${pathname === l.to ? "border-l-2 border-black bg-[#a3dc5d]" : "hover:bg-[#abf155] rounded"}`}
            onClick={() => navigate(l.to)}
          >
            {l.icon}
            {l.title}
          </div>
        ))
      }
    </aside>
  )
}

export default Sidebar