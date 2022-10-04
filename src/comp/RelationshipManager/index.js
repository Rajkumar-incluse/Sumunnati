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
    to: '/relationship_manager/dashboard'
  },
  {
    title: "FPO Info",
    icon: <Dpr />,
    to: '/relationship_manager/fpo'
  },
  {
    title: "Loan",
    icon: <Loan />,
    to: '/relationship_manager/loan'
  },
  {
    title: "Loan account details",
    icon: <Loan />,
    to: '/relationship_manager/loan-details'
  },
  {
    title: "Support",
    icon: <Support />,
    to: '/relationship_manager/support'
  },
  {
    title: "Settings",
    icon: <Setting />,
    to: '/relationship_manager/setting'
  },
]

function Manager() {
  return <AppWrapper userType="relationship_manager" list={list} />
}

export default Manager