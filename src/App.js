import { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

const ForgetPass = lazy(() => import("./comp/Auth/ForgetPass"))
const Signup = lazy(() => import("./comp/Auth/Signup"))
const Login = lazy(() => import("./comp/Auth/Login"))

const AdminSubscription = lazy(() => import("./comp/Admin/Subscription"))
const AdminUser = lazy(() => import("./comp/Admin/User"))
const Admin = lazy(() => import("./comp/Admin"))

const RMDashboard = lazy(() => import("./comp/RelationshipManager/Dashboard"))
const RMSettings = lazy(() => import("./comp/RelationshipManager/Settings"))
const RMSupport = lazy(() => import("./comp/RelationshipManager/Support"))
const RMLoan = lazy(() => import("./comp/RelationshipManager/Loan"))
const RMFPO = lazy(() => import("./comp/RelationshipManager/FPO"))
const RM = lazy(() => import("./comp/RelationshipManager"))

const CMDashboard = lazy(() => import("./comp/CreditManager/Dashboard"))
const CMSettings = lazy(() => import("./comp/CreditManager/Settings"))
const CMSupport = lazy(() => import("./comp/CreditManager/Support"))
const CMLoan = lazy(() => import("./comp/CreditManager/Loan"))
const CMFPO = lazy(() => import("./comp/CreditManager/FPO"))
const CM = lazy(() => import("./comp/CreditManager"))

const CCLUDashboard = lazy(() => import("./comp/CentralCoLendingUnit/Dashboard"))
const CCLUSettings = lazy(() => import("./comp/CentralCoLendingUnit/Settings"))
const CCLUSupport = lazy(() => import("./comp/CentralCoLendingUnit/Support"))
const CCLULoan = lazy(() => import("./comp/CentralCoLendingUnit/Loan"))
const CCLUFPO = lazy(() => import("./comp/CentralCoLendingUnit/FPO"))
const CCLU = lazy(() => import("./comp/CentralCoLendingUnit"))

const CADDashboard = lazy(() => import("./comp/CreditAdminDepartment/Dashboard"))
const CADSettings = lazy(() => import("./comp/CreditAdminDepartment/Settings"))
const CADSupport = lazy(() => import("./comp/CreditAdminDepartment/Support"))
const CADLoan = lazy(() => import("./comp/CreditAdminDepartment/Loan"))
const CADFPO = lazy(() => import("./comp/CreditAdminDepartment/FPO"))
const CAD = lazy(() => import("./comp/CreditAdminDepartment"))

const CCDashboard = lazy(() => import("./comp/CreditCommitte/Dashboard"))
const CCSettings = lazy(() => import("./comp/CreditCommitte/Settings"))
const CCSupport = lazy(() => import("./comp/CreditCommitte/Support"))
const CCLoan = lazy(() => import("./comp/CreditCommitte/Loan"))
const CCFPO = lazy(() => import("./comp/CreditCommitte/FPO"))
const CC = lazy(() => import("./comp/CreditCommitte"))

const CO = lazy(() => import("./comp/CreditOperations"))
const Op = lazy(() => import("./comp/Operations"))

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forget-password" element={<ForgetPass />} />

        <Route path="admin" element={<Admin />}>
          <Route path='user' element={<AdminUser />} />
          <Route path='subscription' element={<AdminSubscription />} />
        </Route>

        <Route path="relationship_manager" element={<RM />}>
          <Route path='fpo' element={<RMFPO />} />
          <Route path='support' element={<RMSupport />} />
          <Route path='dashboard' element={<RMDashboard />} />
          <Route path='setting' element={<RMSettings />} />
          <Route path='loan' element={<RMLoan />} />
        </Route>

        <Route path="credit_manager" element={<CM />}>
          <Route path='fpo' element={<CMFPO />} />
          <Route path='support' element={<CMSupport />} />
          <Route path='dashboard' element={<CMDashboard />} />
          <Route path='setting' element={<CMSettings />} />
          <Route path='loan' element={<CMLoan />} />
        </Route>

        <Route path="central_co_lending_unit" element={<CCLU />}>
          <Route path='fpo' element={<CCLUFPO />} />
          <Route path='support' element={<CCLUSupport />} />
          <Route path='dashboard' element={<CCLUDashboard />} />
          <Route path='setting' element={<CCLUSettings />} />
          <Route path='loan' element={<CCLULoan />} />
        </Route>

        <Route path="credit_admin_department" element={<CAD />}>
          <Route path='fpo' element={<CADFPO />} />
          <Route path='support' element={<CADSupport />} />
          <Route path='dashboard' element={<CADDashboard />} />
          <Route path='setting' element={<CADSettings />} />
          <Route path='loan' element={<CADLoan />} />
        </Route>

        <Route path="credit_committe" element={<CC />}>
          <Route path='fpo' element={<CCFPO />} />
          <Route path='support' element={<CCSupport />} />
          <Route path='dashboard' element={<CCDashboard />} />
          <Route path='setting' element={<CCSettings />} />
          <Route path='loan' element={<CCLoan />} />
        </Route>

        <Route path="credit_operations" element={<CO />} />
        <Route path="operations" element={<Op />} />
      </Routes>
    </Suspense>
  )
}

export default App;