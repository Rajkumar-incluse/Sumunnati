import { useState } from 'react';
import dummyData from '../../dummy/manager/dpr';

import TotalAmountModal from './Modals/TotalAmount';
import InterestModal from './Modals/InterestModal';

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
        open === "interest" &&
        <InterestModal
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