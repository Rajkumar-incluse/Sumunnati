import { useState } from 'react';
import dummyData from '../../../dummy/manager/dpr';

import LoanRepaymentSchedule from '../../Template/Modals/LoanRepaymentSchedule';
import DisbursementLetter from '../Modals/DisbursementLetter';
import CreateLoanModal from '../Modals/CreateLoanModal';
import CheckListModal from '../Modals/CheckListModal';
import Interest from '../../Template/Modals/Interest';
import Status from '../Modals/Status';
import Tabs from '../../UIComp/Tabs';

import InProccess from './InProccess';
import Rejected from './Rejected';
import Granted from './Granted';

const emptyDetails = {
  FPO_Name: 'ABC FPO',
  Arrangement: 'PTC',
  Aggregate_disbursement: 500000,
  Tenure: "Months",
  TenureNumber: 3,
  Validity_of_limit: 10,
  Purpose: 'Infra',
  Nature_of_facility: 'LTL',
  Revolving: 'Non-revolving',
  Margin: 6770,
  Principal_repayment: 'Quartely',
  Interest_repayment: 'Monthly',
  Security: 'Corporate guarantee',
  Security_remarks: "There will be some remoarks added here.",
  Rate_of_Interest: 20,
  Referral_fee: 30,
  Processing_fee: 40,
  Name_of_the_pool: 'ABC',
  Average_yield: 2990,
  PSL: 'Others',
  Coupon_rate: 690,
  Payment_terms: 'Some payment',
  Nature_of_underlying_asset: 'Some Nature',
  Average_tenor: 'Months',
  Number_of_obligors: 98,
  Consideration_amount: 6780,
  Cut_off_date: '2022-07-15',
  Asignee: 'Raj kumar',
  Originator: 'Kesavan',
  Pool_size: 50,
  Execution_date: '2022-07-15',
  Pool_maturity_date: '2022-07-15',
  External_rating_Entity: '3.6',
  External_rating_Individual: '4.8',
  // Bureau_check: 'Highmark',
  ESMS: 'Applicable',
  Samunnati_score: '5',
  Business_segment: 'Food processing',
  Nature_of_security: 'Secured',
  Guarantee: 'Partially',
  otherDocs: ["Driving Lisence", "Other Doc", "Legal Cert", "Extra doc"]
}

const lists = ['Granted Loans', 'Rejected Loans', 'Loans in process']

function Loan() {
  const [open, setOpen] = useState('')
  const [type, setType] = useState('')

  const updateOpen = (val, condition) => {
    setOpen(val)
    if (condition) setType(condition)
  }

  const closeModal = () => {
    setOpen('')
    setType('')
  }

  return (
    <section className='dfc h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='df gap-4 mt-4 px-8 py-4'>
        <h1 className='text-2xl'>Loan Information</h1>
        <button onClick={() => updateOpen('loan', 'Create')} className='bg-[#a3dc5d] hover:bg-[#bdf579]'>Create loan</button>
      </div>

      <Tabs
        tabsList={lists}
        listClass='mx-6'
        tabClass='pb-2'
        panelClass='scroll-y overflow-x-auto mx-4 my-2 bg-white'
        panelChildCls="h-full"
      >
        <Granted
          data={dummyData.filter(d => d.appOrRe === 'Accepted')}
          updateOpen={updateOpen}
        />
        <Rejected
          data={dummyData.filter(d => d.appOrRe === 'Rejected')}
          updateOpen={updateOpen}
        />
        <InProccess
          data={dummyData.filter(d => d.appOrRe === 'Pending')}
          updateOpen={updateOpen}
        />
      </Tabs>

      {
        open === "loan" &&
        <CreateLoanModal
          isOpen
          type={type}
          data={type !== "Create" ? emptyDetails : false}
          closeModal={closeModal}
        />
      }

      {
        open === "status" &&
        <Status
          isOpen
          closeModal={closeModal}
        />
      }

      {
        open === "repayment" &&
        <LoanRepaymentSchedule
          isOpen
          type={type}
          closeModal={closeModal}
        />
      }

      {
        open === "updateCLModal" &&
        <CheckListModal
          isOpen
          closeModal={closeModal}
        />
      }

      {
        open === "interest" &&
        <Interest
          isOpen
          closeModal={closeModal}
        />
      }

      {
        open === "Disbursement" &&
        <DisbursementLetter
          isOpen
          type={type}
          closeModal={closeModal}
        />
      }
    </section>
  )
}

export default Loan