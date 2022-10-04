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
    to: '/credit_operations/dashboard'
  },
  {
    title: "FPO Info",
    icon: <Dpr />,
    to: '/credit_operations/fpo'
  },
  {
    title: "Loan",
    icon: <Loan />,
    to: '/credit_operations/loan'
  },
  {
    title: "Support",
    icon: <Support />,
    to: '/credit_operations/support'
  },
  {
    title: "Settings",
    icon: <Setting />,
    to: '/credit_operations/setting'
  },
]

function CreditOperations() {
  return <AppWrapper userType="credit_operations" list={list} />
}

export default CreditOperations