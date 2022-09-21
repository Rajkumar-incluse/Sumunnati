import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as Dashboard } from '../../assets/svg/common/dashboard.svg';
import { ReactComponent as Loan } from '../../assets/svg/common/loan.svg';
import { ReactComponent as Dpr } from '../../assets/svg/common/dpr.svg';
import summunatiLogo from '../../assets/svg/Samunnati_Logo.svg';

const list = [
  {
    title: "Dashboard",
    icon: <Dashboard />,
    to: '/sbi/dashboard'
  },
  {
    title: "FPO Info",
    icon: <Dpr />,
    to: '/sbi/fpo'
  },
  {
    title: "Loan",
    icon: <Loan />,
    to: '/sbi/loan'
  },
  {
    title: "Loan-details",
    icon: <Loan />,
    to: '/sbi/loan-details'
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