import { useState } from 'react';

import dummyData from '../../dummy/manager/dpr';

import DisbursementModal from './Modals/DisbursementModal';
import InProgressStatus from './Modals/InProgressStatus';
import TotalAmountModal from './Modals/TotalAmount';
import LimitAppraisal from './Modals/LimitAppraisal';
import InterestModal from './Modals/InterestModal';
import DueDiligence from './Modals/DueDiligence';
import BureauCheck from './Modals/BureauCheck';
import Tabs from '../UIComp/Tabs';

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
              <td
                className='px-2 py-1 cursor-pointer'
                onClick={() => updateOpen("totalAmount")}
              >
                &#8377; {d.amount}
              </td>
              <td className='px-2 py-1'>
                {
                  i % 2 === 0
                    ?
                    <button className='w-20 py-0.5 bg-[#bdf579] text-xs'>
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
                    <button
                      className='w-20 py-0.5 bg-[#bdf579] text-xs'
                      onClick={() => updateOpen('Disbursement', 'View')}
                    >
                      Disbursed
                    </button>
                    :
                    <button
                      className='w-20 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                      onClick={() => updateOpen('Disbursement', 'Create')}
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

function InProgressTable({ data, updateOpen }) {
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
          <td className='px-2 py-4 text-gray-500 font-medium'>Due diligence</td>
          <td className='px-2 py-4 text-gray-500 font-medium'>Loan limit appraisal</td>
          <td className='px-2 py-4 text-gray-500 font-medium'>Status</td>
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
              <td className='px-2 py-1'>14%</td>
              <td className='px-2 py-1'>9%</td>
              <td className='px-2 py-1'>
                <button className='p-0' onClick={() => updateOpen('interest')}>14%</button>
              </td>
              <td className='px-2 py-1'>
                {
                  i % 2 === 0
                    ?
                    <button className='w-20 py-0.5 bg-[#bdf579] text-xs'>
                      View
                    </button>
                    :
                    <button
                      className='w-20 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                      onClick={() => updateOpen('DueDiligence')}
                    >
                      Pending
                    </button>
                }
              </td>
              <td className='px-2 py-1'>
                {
                  i % 2 === 0
                    ?
                    <button className='w-20 py-0.5 bg-[#bdf579] text-xs'>
                      View
                    </button>
                    :
                    <button
                      className='w-20 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                      onClick={() => updateOpen('LimitAppraisal')}
                    >
                      Pending
                    </button>
                }
              </td>
              <td className='px-2 py-1'>
                {
                  i % 2 === 0
                    ?
                    <button className='w-20 py-0.5 bg-[#bdf579] text-xs'>
                      View
                    </button>
                    :
                    <button
                      className='w-20 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                      onClick={() => updateOpen('InProgressStatus')}
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

function RejectedTable({ data, updateOpen }) {
  return (
    <table className='w-full'>
      <thead>
        <tr className='sticky top-0 bg-white text-left'>
          <td className='pl-12 pr-2 py-4 text-gray-500 font-medium'>Date</td>
          <td className='px-2 py-4 text-gray-500 font-medium'>Loan Id</td>
          <td className='px-2 py-4 text-gray-500 font-medium'>Proposed Loan amount</td>
        </tr>
      </thead>

      <tbody>
        {
          data.map(d => (
            <tr key={d.id} className='text-sm'>
              <td className='pl-12 pr-2 py-1'>{d.start}</td>
              <td className='px-2 py-1'>{d.loanId}</td>
              <td
                className='px-2 py-1 cursor-pointer'
                onClick={() => updateOpen("totalAmount")}
              >
                &#8377; {d.amount}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

const tabList = ['In-progress', 'Sanctioned', 'Rejected']

function Loan() {
  const [open, setOpen] = useState("")
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
        <InProgressTable
          data={dummyData}
          updateOpen={updateOpen}
        />
        <SanctionedTable
          data={dummyData}
          updateOpen={updateOpen}
        />
        <RejectedTable
          data={dummyData}
          updateOpen={updateOpen}
        />
      </Tabs>

      {
        open === "interest" &&
        <InterestModal
          isOpen
          closeModal={closeModal}
        />
      }

      {
        open === 'Disbursement' &&
        <DisbursementModal
          isOpen
          type={type}
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

      {
        open === "InProgressStatus" &&
        <InProgressStatus
          isOpen
          closeModal={closeModal}
        />
      }

      {
        open === "LimitAppraisal" &&
        <LimitAppraisal
          isOpen
          closeModal={closeModal}
          openBueroCheck={() => updateOpen("BureauCheck")}
        />
      }

      {
        open === "DueDiligence" &&
        <DueDiligence
          isOpen
          closeModal={closeModal}
          openBueroCheck={() => updateOpen("BureauCheck")}
        />
      }

      {
        open === "BureauCheck" &&
        <BureauCheck
          isOpen
          type="View"
          closeModal={() => updateOpen("DueDiligence")}
        />
      }
    </section>
  )
}

export default Loan