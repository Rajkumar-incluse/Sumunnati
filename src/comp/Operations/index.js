import AppWrapper from "../Template/AppWrapper";
import { ReactComponent as Dashboard } from '../../assets/svg/common/dashboard.svg';
import { ReactComponent as Setting } from '../../assets/svg/common/setting.svg';
import { ReactComponent as Support } from '../../assets/svg/common/support.svg';
import { ReactComponent as Loan } from '../../assets/svg/common/loan.svg';
import { ReactComponent as Dpr } from '../../assets/svg/common/dpr.svg';

const list = [
  {
    title: "Dashboard",
    icon: <Dashboard />,
    to: '/operations/dashboard'
  },
  {
    title: "FPO Info",
    icon: <Dpr />,
    to: '/operations/fpo'
  },
  {
    title: "Loan",
    icon: <Loan />,
    to: '/operations/loan'
  },
  {
    title: "Loan account details",
    icon: <Loan />,
    to: '/credit_admin_department/loan-details'
  },
  {
    title: "Support",
    icon: <Support />,
    to: '/operations/support'
  },
  {
    title: "Settings",
    icon: <Setting />,
    to: '/operations/setting'
  },
]

function Operations() {
  return <AppWrapper userType="operations" list={list} />
}

export default Operations