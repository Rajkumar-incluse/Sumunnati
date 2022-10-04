import { useState } from 'react';
import dummyData from '../../dummy/manager/dpr';

import CreateLoanModal from './Modals/CreateLoanModal';
import TotalAmountModal from './Modals/TotalAmount';
import Interest from '../Template/Modals/Interest';

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

function Table({ data, updateOpen }) {
  return (
    <table className='w-full'>
      <thead>
        <tr className='sticky top-0 bg-white text-left'>
          <td className='pl-12 pr-2 py-4 text-gray-500 font-medium'>Date</td>
          <td className='px-2 py-4 text-gray-500 font-medium'>Loan Id</td>
          <td className='px-2 py-4 text-gray-500 font-medium'>Total Loan amount</td>
          <td className='px-2 py-4 text-gray-500 font-medium'>Interest rate</td>
          <td className='px-2 py-4 text-gray-500 font-medium'>Total amount outstanding</td>
          <td className='px-2 py-4 text-gray-500 font-medium'>Next EMI date</td>
          <td className='px-2 py-4 text-gray-500 font-medium'>Next EMI amount</td>
          <td className='px-2 py-4 text-gray-500 font-medium'>Status</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Loan Application</td>
        </tr>
      </thead>

      <tbody>
        {
          data.map((d, i) => (
            <tr key={d.id} className='text-sm'>
              <td className='pl-12 pr-2 py-1'>{d.start}</td>
              <td className='px-2 py-1'>{d.loanId}</td>
              <td
                className='px-2 py-1 cursor-pointer'
                onClick={() => updateOpen("totalAmount")}
              >
                &#8377; {d.amount}
              </td>
              <td className='px-2 py-1'>
                <button className='p-0' onClick={() => updateOpen('interest')}>14%</button>
              </td>
              <td className='px-2 py-1'>&#8377; {d.amount}</td>
              <td className='px-2 py-1'>{d.end}</td>
              <td className='px-2 py-1'>&#8377; {d.amount}</td>
              <td className='px-2 py-1'>
                {
                  i % 2 === 0
                    ?
                    <button className='w-24 py-0.5 bg-[#bdf579] text-xs cursor-default'>
                      Repaid
                    </button>
                    :
                    <button
                      className='w-24 py-0.5 bg-yellow-200 text-xs'
                    >
                      In progress
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

function LoanDetails() {
  const [open, setOpen] = useState("")

  const updateOpen = val => setOpen(val)
  const closeModal = () => setOpen('')

  return (
    <section className='dfc gap-4 h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='df gap-4 px-8 pt-4'>
        <h1 className='text-2xl'>Loan Account Details</h1>
      </div>

      <div className='scroll-y mx-4 my-2 bg-white'>
        <Table
          data={dummyData}
          updateOpen={updateOpen}
        />
      </div>

      {
        open === "loan" &&
        <CreateLoanModal
          isOpen
          type={"View"}
          data={emptyDetails}
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
        open === "totalAmount" &&
        <TotalAmountModal
          isOpen
          closeModal={closeModal}
        />
      }
    </section>
  )
}

export default LoanDetails