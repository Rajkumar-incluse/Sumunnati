import { useState } from 'react';
import dummyData from '../../dummy/manager/dpr';

import InterestModal from './Modals/InterestModal';

function LoanDetails() {
  const [open, setOpen] = useState('')
  // const [type, setType] = useState('')

  const updateOpen = (val, condition) => {
    setOpen(val)
    // if (condition) setType(condition)
  }

  const closeModal = () => {
    setOpen('')
    // setType('')
  }

  return (
    <section className='dfc h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='df gap-4 mt-4 px-8 py-4'>
        <h1 className='text-2xl'>Loan Account Details</h1>
      </div>

      <div className='scroll-y overflow-x-auto mx-4 my-2 bg-white'>
        <table className='w-full table-fixed'>
          <thead>
            <tr className='sticky top-0 bg-white text-left'>
              <td className='w-40 pl-4 pr-2 py-4 text-gray-500 font-medium leading-5'>Date</td>
              <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Loan Id</td>
              <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>FPO Name</td>
              <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Loan amount</td>
              <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Interest rate</td>
              <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Total amount outstanding</td>
              <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Next EMI date</td>
              <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Next EMI amount</td>
              <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Status</td>
            </tr>
          </thead>

          <tbody>
            {
              dummyData.map((d, i) => (
                <tr key={d.id} className='text-sm'>
                  <td className='pl-4 pr-2 py-1'>{d.start}</td>
                  <td className='px-2 py-1'>{d.loanId}</td>
                  <td className='px-2 py-1'>{d.fpo}</td>
                  <td className='px-2 py-1'>&#8377; {d.amount}</td>
                  <td className='px-2 py-1'>
                    <button className='p-0' onClick={() => updateOpen('interest')}>14%</button>
                  </td>
                  <td className='px-2 py-1'>&#8377; {d.due}</td>
                  <td className='px-2 py-1'>{d.end}</td>
                  <td className='px-2 py-1'>&#8377; {d.amount}</td>
                  <td className='px-2 py-1'>
                    {
                      i % 2 === 0
                        ?
                        <button
                          className='w-24 py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                          onClick={() => updateOpen('Disbursement', 'View')}
                        >
                          Repaid
                        </button>
                        :
                        <button
                          className='w-24 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                          onClick={() => updateOpen('Disbursement', "Create")}
                        >
                          In-progress
                        </button>
                    }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      {
        open === "interest" &&
        <InterestModal
          isOpen
          closeModal={closeModal}
        />
      }
    </section>
  )
}

export default LoanDetails