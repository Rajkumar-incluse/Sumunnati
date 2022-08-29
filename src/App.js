import { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

const ForgetPass = lazy(() => import("./comp/Auth/ForgetPass"))
const Signup = lazy(() => import("./comp/Auth/Signup"))
const Login = lazy(() => import("./comp/Auth/Login"))

const AdminSubscription = lazy(() => import("./comp/Admin/Subscription"))
const AdminUser = lazy(() => import("./comp/Admin/User"))
const Admin = lazy(() => import("./comp/Admin"))

const RMLoanDetails = lazy(() => import("./comp/RelationshipManager/LoanDetails"))
const RMDashboard = lazy(() => import("./comp/RelationshipManager/Dashboard"))
const RMSettings = lazy(() => import("./comp/RelationshipManager/Settings"))
const RMSupport = lazy(() => import("./comp/RelationshipManager/Support"))
const RMLoan = lazy(() => import("./comp/RelationshipManager/Loan"))
const RMFPO = lazy(() => import("./comp/RelationshipManager/FPO"))
const RM = lazy(() => import("./comp/RelationshipManager"))

const CMLoanDetails = lazy(() => import("./comp/CreditManager/LoanDetails"))
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

const CADLoanDetails = lazy(() => import("./comp/CreditAdminDepartment/LoanDetails"))
const CADDashboard = lazy(() => import("./comp/CreditAdminDepartment/Dashboard"))
const CADSettings = lazy(() => import("./comp/CreditAdminDepartment/Settings"))
const CADSupport = lazy(() => import("./comp/CreditAdminDepartment/Support"))
const CADLoan = lazy(() => import("./comp/CreditAdminDepartment/Loan"))
const CADFPO = lazy(() => import("./comp/CreditAdminDepartment/FPO"))
const CAD = lazy(() => import("./comp/CreditAdminDepartment"))

const CCLoanDetails = lazy(() => import("./comp/CreditCommitte/LoanDetails"))
const CCDashboard = lazy(() => import("./comp/CreditCommitte/Dashboard"))
const CCSettings = lazy(() => import("./comp/CreditCommitte/Settings"))
const CCSupport = lazy(() => import("./comp/CreditCommitte/Support"))
const CCLoan = lazy(() => import("./comp/CreditCommitte/Loan"))
const CCFPO = lazy(() => import("./comp/CreditCommitte/FPO"))
const CC = lazy(() => import("./comp/CreditCommitte"))

const CODashboard = lazy(() => import("./comp/CreditOperations/Dashboard"))
const COSettings = lazy(() => import("./comp/CreditOperations/Settings"))
const COSupport = lazy(() => import("./comp/CreditOperations/Support"))
const COLoan = lazy(() => import("./comp/CreditOperations/Loan"))
const COFPO = lazy(() => import("./comp/CreditOperations/FPO"))
const CO = lazy(() => import("./comp/CreditOperations"))

const OpDashboard = lazy(() => import("./comp/Operations/Dashboard"))
const OpSettings = lazy(() => import("./comp/Operations/Settings"))
const OpSupport = lazy(() => import("./comp/Operations/Support"))
const OpLoan = lazy(() => import("./comp/Operations/Loan"))
const OpFPO = lazy(() => import("./comp/Operations/FPO"))
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
          <Route path='loan-details' element={<RMLoanDetails />} />
        </Route>

        <Route path="credit_manager" element={<CM />}>
          <Route path='fpo' element={<CMFPO />} />
          <Route path='support' element={<CMSupport />} />
          <Route path='dashboard' element={<CMDashboard />} />
          <Route path='setting' element={<CMSettings />} />
          <Route path='loan' element={<CMLoan />} />
          <Route path='loan-details' element={<CMLoanDetails />} />
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
          <Route path='loan-details' element={<CADLoanDetails />} />
        </Route>

        <Route path="credit_committee" element={<CC />}>
          <Route path='fpo' element={<CCFPO />} />
          <Route path='support' element={<CCSupport />} />
          <Route path='dashboard' element={<CCDashboard />} />
          <Route path='setting' element={<CCSettings />} />
          <Route path='loan' element={<CCLoan />} />
          <Route path='loan-details' element={<CCLoanDetails />} />
        </Route>

        <Route path="credit_operations" element={<CO />} >
          <Route path='fpo' element={<COFPO />} />
          <Route path='support' element={<COSupport />} />
          <Route path='dashboard' element={<CODashboard />} />
          <Route path='setting' element={<COSettings />} />
          <Route path='loan' element={<COLoan />} />
        </Route>

        <Route path="operations" element={<Op />} >
          <Route path='fpo' element={<OpFPO />} />
          <Route path='support' element={<OpSupport />} />
          <Route path='dashboard' element={<OpDashboard />} />
          <Route path='setting' element={<OpSettings />} />
          <Route path='loan' element={<OpLoan />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;