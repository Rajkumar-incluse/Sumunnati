// import { useState } from 'react';
import cn from 'classnames';

import dummyData from '../../dummy/manager/dpr';

// import CreateLoanModal from './Modals/CreateLoanModal';
// import InterestModal from './Modals/InterestModal';
// import StatusUpdate from './Modals/StatusUpdate';
// import ShareToSBI from './Modals/ShareToSBI';
import Tabs from '../UIComp/Tabs';

// const emptyDetails = {
//   Name: 'ABC FPO',
//   Arrangement: 'PTC',
//   Aggregate_disbursement: 500000,
//   Tenure: "Months",
//   TenureNumber: 3,
//   Validity_of_limit: 10,
//   Purpose: 'Infra',
//   Nature_of_facility: 'LTL',
//   Revolving: 'Non-revolving',
//   Margin: 6770,
//   Principal_repayment: 'Quartely',
//   Interest_repayment: 'Monthly',
//   Security: 'Corporate guarantee',
//   Security_remarks: "There will be some remoarks added here.",
//   Rate_of_Interest: 20,
//   Referral_fee: 30,
//   Processing_fee: 40,
//   Name_of_the_pool: 'ABC',
//   Average_yield: 2990,
//   PSL: 'Others',
//   Coupon_rate: 690,
//   Payment_terms: 'Some payment',
//   Nature_of_underlying_asset: 'Some Nature',
//   Average_tenor: 'Months',
//   Number_of_obligors: 98,
//   Consideration_amount: 6780,
//   Cut_off_date: '2022-07-15',
//   Asignee: 'Raj kumar',
//   Originator: 'Kesavan',
//   Pool_size: 50,
//   Execution_date: '2022-07-15',
//   Pool_maturity_date: '2022-07-15',
//   External_rating_Entity: '3.6',
//   External_rating_Individual: '4.8',
//   Bureau_check: 'Highmark',
//   ESMS: 'Applicable',
//   Samunnati_score: '5',
//   Business_segment: 'Food processing',
//   Nature_of_security: 'Secured',
//   Guarantee: 'Partially',
//   otherDocs: ["Driving Lisence", "Other Doc", "Legal Cert", "Extra doc"]
// }

function Table({ data, updateOpen }) {
  return (
    <table className='w-full'>
      <thead>
        <tr className='sticky top-0 bg-white text-left'>
          <td className='pl-12 pr-2 py-4 text-gray-500 font-medium'>Date</td>
          <td className='px-2 py-4 text-gray-500 font-medium'>Loan Id</td>
          <td className='px-2 py-4 text-gray-500 font-medium'>Proposed Loan amount</td>
          <td className='px-2 py-4 text-gray-500 font-medium'>SBI's share</td>
          <td className='px-2 py-4 text-gray-500 font-medium'>Samunnati's share</td>
          <td className='px-2 py-4 text-gray-500 font-medium'>Interest rate</td>
          <td className='px-2 py-4 text-gray-500 font-medium'>Loan sanction</td>
        </tr>
      </thead>

      <tbody>
        {
          data.map((d, i) => (
            <tr key={d.id} className='text-sm'>
              <td className='pl-12 pr-2 py-1'>{d.start}</td>
              <td className='px-2 py-1'>{d.loanId}</td>
              <td className='px-2 py-1'>&#8377; {d.amount}</td>
              <td className='px-2 py-1'>14%</td>
              <td className='px-2 py-1'>9%</td>
              <td className='px-2 py-1'>
                <button className='p-0' onClick={() => updateOpen('interest')}>14%</button>
              </td>
              <td className='px-2 py-1'>
                <button
                  className={
                    cn("w-24 px-0 py-px rounded-full", {
                      "bg-[#a3dc5d]": d.appOrRe === "Accepted",
                      "bg-yellow-200": d.appOrRe === "Pending",
                      "bg-red-200": d.appOrRe === "Rejected",
                    })
                  }
                  onClick={() => updateOpen("Loan")}
                >
                  {d.appOrRe === "Accepted" ? "Sanctioned" : d.appOrRe}
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

function SanctionedTable({ data, updateOpen }) {
  return (
    <table className='w-full'>
      <thead>
        <tr className='sticky top-0 bg-white text-left'>
          <td className='pl-12 pr-2 py-4 text-gray-500 font-medium'>Date</td>
          <td className='px-2 py-4 text-gray-500 font-medium'>Loan Id</td>
          <td className='px-2 py-4 text-gray-500 font-medium'>Proposed Loan amount</td>
          <td className='px-2 py-4 text-gray-500 font-medium'>Deed of Assignment</td>
          <td className='px-2 py-4 text-gray-500 font-medium'>Disbursement</td>
        </tr>
      </thead>

      <tbody>
        {
          data.map((d, i) => (
            <tr key={d.id} className='text-sm'>
              <td className='pl-12 pr-2 py-1'>{d.start}</td>
              <td className='px-2 py-1'>{d.loanId}</td>
              <td className='px-2 py-1'>&#8377; {d.amount}</td>
              <td className='px-2 py-1'>
                {
                  i % 2 === 0
                    ?
                    <button className='w-20 py-0.5 bg-[#bdf579] text-xs cursor-default'>
                      View
                    </button>
                    :
                    <button
                      className='w-20 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                      onClick={() => updateOpen('shareToSBI')}
                    >
                      Pending
                    </button>
                }
              </td>
              <td className='px-2 py-1'>
                {
                  i % 3 === 0
                    ?
                    <button className='w-20 py-0.5 bg-[#bdf579] text-xs cursor-default'>
                      Disbursed
                    </button>
                    :
                    <button
                      className='w-20 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                      onClick={() => updateOpen('shareToSBI')}
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


const tabList = ['In-progress', 'Sanctioned']

function Loan() {
  // const [open, setOpen] = useState("")

  // const updateOpen = val => setOpen(val)
  // const closeModal = () => setOpen('')

  const updateOpen = val => { }

  return (
    <section className='dfc gap-4 h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='df gap-4 px-8 pt-4'>
        <h1 className='text-2xl'>Loan Information</h1>
      </div>

      <Tabs
        tabsList={tabList}
        listClass='mx-6'
        tabClass='pb-2'
        panelClass='scroll-y mx-4 my-2 bg-white'
      >
        <Table
          data={dummyData}
          updateOpen={updateOpen}
        />

        <SanctionedTable
          data={dummyData.filter(d => d.appOrRe === "Accepted")}
          updateOpen={updateOpen}
        />
      </Tabs>

      {/* {
        open === "Loan" &&
        <CreateLoanModal
          type={open}
          data={open !== "Create" ? emptyDetails : false}
          isOpen
          closeModal={closeModal}
        />
      }

      {
        open === "interest" &&
        <InterestModal
          isOpen
          closeModal={closeModal}
        />
      }

      {
        open === "statusUpdate" &&
        <StatusUpdate
          isOpen
          closeModal={closeModal}
        />
      }

      {
        open === "shareToSBI" &&
        <ShareToSBI
          isOpen
          closeModal={closeModal}
        />
      } */}
    </section>
  )
}

export default Loan