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

function Manager() {
  return <AppWrapper userType="credit_committee" list={list} />
}

export default Manager