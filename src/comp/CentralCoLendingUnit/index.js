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
    to: '/central_co_lending_unit/dashboard'
  },
  {
    title: "FPO Info",
    icon: <Dpr />,
    to: '/central_co_lending_unit/fpo'
  },
  {
    title: "Loan",
    icon: <Loan />,
    to: '/central_co_lending_unit/loan'
  },
  {
    title: "Support",
    icon: <Support />,
    to: '/central_co_lending_unit/support'
  },
  {
    title: "Settings",
    icon: <Setting />,
    to: '/central_co_lending_unit/setting'
  },
]

function Manager() {
  return <AppWrapper userType="central_co_lending_unit" list={list} />
}

export default Manager