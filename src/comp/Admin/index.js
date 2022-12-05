import AppWrapper from "../Template/AppWrapper";
import { ReactComponent as Setting } from '../../assets/svg/common/setting.svg';
import { ReactComponent as Support } from '../../assets/svg/common/support.svg';
import { ReactComponent as OrgInfo } from '../../assets/svg/user/multiple.svg';
import { ReactComponent as User } from '../../assets/svg/user/single.svg';

const list = [
  {
    title: "User",
    icon: <User />,
    to: '/admin/user'
  },
  {
    title: "Org Info",
    icon: <OrgInfo />,
    to: '/admin/org-info'
  },
  {
    title: "Support",
    icon: <Support />,
    to: '/admin/support'
  },
  {
    title: "Settings",
    icon: <Setting />,
    to: '/admin/setting'
  },
]

function Admin() {
  return <AppWrapper role="admin" list={list} />
}

export default Admin