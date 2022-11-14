import { useState } from 'react';
import dummyData from '../../dummy/manager/dpr';

import LoanRepaymentSchedule from '../Template/Modals/LoanRepaymentSchedule';
import LoanRepaymentStatus from '../Template/Modals/LoanRepaymentStatus';
import DisbursementLetter from './Modals/DisbursementLetter';
import CreateLoanModal from './Modals/CreateLoanModal';
import CheckListModal from './Modals/CheckListModal';
import Interest from '../Template/Modals/Interest';
import Status from './Modals/Status';
import Tabs from '../UIComp/Tabs';

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

function GrantedTable({ data = [], updateOpen }) {
  return (
    <table className='w-full table-fixed'>
      <thead>
        <tr className='sticky top-0 bg-white text-left'>
          <td className='w-28 pl-4 pr-2 py-4 text-gray-500 font-medium leading-5'>Loan Id</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>FPO Name</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Loan amount</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Interest rate</td>
          <td className='w-40 px-2 py-4 text-gray-500 font-medium leading-5'>Loan date</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Outstanding amount</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Next payment amount</td>
          <td className='w-40 px-2 py-4 text-gray-500 font-medium leading-5'>Next payment date</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Repayment structure</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Status</td>
          <td className='w-36 px-2 py-4 text-gray-500 font-medium leading-5'>Loan Repayment status</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Disbursement request letter</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Loan Application</td>
        </tr>
      </thead>

      <tbody>
        {
          data.map((d, i) => (
            <tr key={d.id} className='text-sm'>
              <td className='pl-4 pr-2 py-1'>{d.loanId}</td>
              <td className='px-2 py-1'>{d.fpo}</td>
              <td className='px-2 py-1'>&#8377; {d.amount}</td>
              <td className='px-2 py-1'>
                <button className='p-0' onClick={() => updateOpen('interest')}>14%</button>
              </td>
              <td className='px-2 py-1'>{d.start}</td>
              <td className='px-2 py-1'>&#8377; {d.due}</td>
              <td className='px-2 py-1'>&#8377; {d.due - 400}</td>
              <td className='px-2 py-1'>{d.end}</td>
              <td className='px-2 py-1'>
                <button
                  className='py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                  onClick={() => updateOpen('repayment', 'View')}
                >
                  View
                </button>
              </td>
              <td className='px-2 py-1'>
                <button
                  className={`py-0.5 px-0 w-[82px] text-xs ${i % 3 === 0 ? ' bg-yellow-200 text-yellow-900' : 'bg-green-300 text-green-800'}`}
                >
                  {i % 3 === 0 ? 'In progress' : 'Repaid'}
                </button>
              </td>
              <td className='px-2 py-1'>
                <button
                  className='block w-20 mx-auto py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                  onClick={() => updateOpen('LoanRepaymentStatus')}
                >
                  View
                </button>
              </td>
              <td className='px-2 py-1'>
                {
                  i % 2 === 0
                    ?
                    <button
                      className='w-20 py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                      onClick={() => updateOpen('Disbursement', 'View')}
                    >
                      View
                    </button>
                    :
                    <button
                      className='w-20 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                      onClick={() => updateOpen('Disbursement', "Create")}
                    >
                      Pending
                    </button>
                }
              </td>
              <td className='px-2 py-1'>
                <button
                  className='py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                  onClick={() => updateOpen('loan', 'View')}
                >
                  View
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

function RejectedTable({ data = [], updateOpen }) {
  return (
    <table className='w-full table-fixed'>
      <thead>
        <tr className='sticky top-0 bg-white text-left'>
          <td className='w-28 pl-4 pr-2 py-4 text-gray-500 font-medium leading-5'>Loan Id</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>FPO Name</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Proposed loan amount</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Interest rate</td>
          <td className='w-80 px-2 py-4 text-gray-500 font-medium leading-5'>Reason for rejection (Comment of credit committee)</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Loan Application</td>
        </tr>
      </thead>

      <tbody>
        {
          data.map(d => (
            <tr key={d.id} className='text-sm'>
              <td className='pl-4 pr-2 py-1'>{d.loanId}</td>
              <td className='px-2 py-1'>{d.fpo}</td>
              <td className='px-2 py-1'>&#8377; {d.amount}</td>
              <td className='px-2 py-1'>
                <button className='p-0' onClick={() => updateOpen('interest')}>14%</button>
              </td>
              <td className='px-2 py-1 xl:pr-12'>
                Document is not correct
              </td>
              <td className='px-2 py-1'>
                <button
                  className='py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                  onClick={() => updateOpen('loan', 'View')}
                >
                  View
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

function ProcessTable({ data = [], updateOpen }) {
  return (
    <table className='w-full table-fixed'>
      <thead>
        <tr className='sticky top-0 bg-white text-left'>
          <td className='w-28 pl-4 pr-2 py-4 text-gray-500 font-medium leading-5'>Loan Id</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>FPO Name</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Proposed loan amount</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Interest rate</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Loan application</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Status</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Update checklist</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Disbursement request letter</td>
        </tr>
      </thead>

      <tbody>
        {
          data.map((d, i) => (
            <tr key={d.id} className='text-sm'>
              <td className='pl-4 pr-2 py-1'>{d.loanId}</td>
              <td className='px-2 py-1'>{d.fpo}</td>
              <td className='px-2 py-1'>&#8377; {d.amount}</td>
              <td className='px-2 py-1'>
                <button className='p-0' onClick={() => updateOpen('interest')}>14%</button>
              </td>
              <td className='px-2 py-1'>
                {
                  i % 3 === 0
                    ?
                    <button
                      className='w-16 py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                      onClick={() => updateOpen('loan', 'View')}
                    >
                      View
                    </button>
                    :
                    <button
                      className='w-16 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                      onClick={() => updateOpen('loan', 'Edit')}
                    >
                      Edit
                    </button>
                }
              </td>
              <td className='px-2 py-1'>
                <button
                  className='py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                  onClick={() => updateOpen('status')}
                >
                  View
                </button>
              </td>
              <td>
                {
                  i % 2 === 0 ?
                    <button
                      className='w-20 py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                      onClick={() => updateOpen('updateCLModal')}
                    >
                      View
                    </button>
                    :
                    <button
                      className='w-20 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                      onClick={() => updateOpen('updateCLModal')}
                    >
                      Update
                    </button>
                }
              </td>
              <td className='px-2 py-1'>
                {
                  i % 2 === 0
                    ?
                    <button
                      className='w-20 py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                      onClick={() => updateOpen('Disbursement', 'View')}
                    >
                      View
                    </button>
                    :
                    <button
                      className='w-20 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                      onClick={() => updateOpen('Disbursement', "Create")}
                    >
                      Pending
                    </button>
                }
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
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
      >
        <GrantedTable
          data={dummyData.filter(d => d.appOrRe === 'Accepted')}
          updateOpen={updateOpen}
        />
        <RejectedTable
          data={dummyData.filter(d => d.appOrRe === 'Rejected')}
          updateOpen={updateOpen}
        />
        <ProcessTable
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

      {
        open === "LoanRepaymentStatus" &&
        <LoanRepaymentStatus
          isOpen
          role="relationship_manager"
          closeModal={closeModal}
        />
      }
    </section>
  )
}

export default Loan