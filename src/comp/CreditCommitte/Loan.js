import { useEffect, useMemo, useState } from 'react';
import dummyData from '../../dummy/manager/dpr';

import RepaymentStructure from './Modals/RepaymentStructure';
import CreateLoanModal from './Modals/CreateLoanModal';
import { DropDownWrapper } from '../UIComp/DropDown';
import InterestModal from './Modals/InterestModal';
import OthersStatus from './Modals/OthersStatus';
import StatusUpdate from './Modals/StatusUpdate';
import Tabs from '../UIComp/Tabs';

const emptyDetails = {
  Name: 'ABC FPO',
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
  Bureau_check: 'Highmark',
  ESMS: 'Applicable',
  Samunnati_score: '5',
  Business_segment: 'Food processing',
  Nature_of_security: 'Secured',
  Guarantee: 'Partially',
  otherDocs: ["Driving Lisence", "Other Doc", "Legal Cert", "Extra doc"]
}

const statusData = {
  confirmed: true,
  comment: 'Please add document X',
  status: 'Accept',
}

function GrantedTable({ data = [], updateOpen }) {
  const [filterByRM, setFilterByRM] = useState('None')
  const [rmNames, setRmNames] = useState([])

  useEffect(() => {
    let filteredNames = [...new Set(data.map(p => p.name))]
    setRmNames([...new Set(["None", ...filteredNames])])
  }, [data])

  const finalData = useMemo(() => {
    let final = data
    if (filterByRM !== "None") {
      final = final.filter(n => n.name === filterByRM)
    }

    return final
  }, [filterByRM, data])

  return (
    <table className='w-full table-fixed'>
      <thead>
        <tr className='sticky top-0 bg-white text-left'>
          <td className='w-28 pl-4 pr-2 py-4 text-gray-500 font-medium leading-5'>Loan Id</td>
          <td className='w-40 px-2 py-4 text-gray-500 font-medium leading-5'>Loan application date</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>FPO Name</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>
            <DropDownWrapper
              list={rmNames}
              onClk={setFilterByRM}
              active={filterByRM}
              activeCls='bg-[#a3dc5d]'
              rootCls='p-0'
            >
              RM name
            </DropDownWrapper>
          </td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Loan amount</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Interest rate</td>
          <td className='w-40 px-2 py-4 text-gray-500 font-medium leading-5'>Loan date</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium leading-5'>Outstanding amount</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium leading-5'>Next payment amount</td>
          <td className='w-40 px-2 py-4 text-gray-500 font-medium leading-5'>Next payment date</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Repayment structure</td>
          <td className='w-24 pl-2 pr-4 py-4 text-gray-500 font-medium leading-5'>Status</td>
        </tr>
      </thead>

      <tbody>
        {
          finalData.map((d, i) => (
            <tr key={d.id} className='text-sm'>
              <td className='pl-4 pr-2 py-1'>{d.loanId}</td>
              <td className='px-2 py-1'>{d.start}</td>
              <td className='px-2 py-1'>{d.fpo}</td>
              <td className='px-2 py-1'>{d.name}</td>
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
                  onClick={() => updateOpen('Repayment')}
                >
                  View
                </button>
              </td>
              <td className='pl-2 pr-4 py-1'>
                <button
                  className={`py-0.5 px-0 w-[82px] text-xs ${i % 3 === 0 ? ' bg-yellow-200 text-yellow-900' : 'bg-green-300 text-green-800'}`}
                >
                  {i % 3 === 0 ? 'In progress' : 'Repaid'}
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
  const [filterByRM, setFilterByRM] = useState('None')
  const [rmNames, setRmNames] = useState([])

  useEffect(() => {
    let filteredNames = [...new Set(data.map(p => p.name))]
    setRmNames([...new Set(["None", ...filteredNames])])
  }, [data])

  const finalData = useMemo(() => {
    let final = data
    if (filterByRM !== "None") {
      final = final.filter(n => n.name === filterByRM)
    }

    return final
  }, [filterByRM, data])

  return (
    <table className='w-full table-fixed'>
      <thead>
        <tr className='sticky top-0 bg-white text-left'>
          <td className='w-28 xl:w-auto pl-4 xl:pl-12 pr-2 py-4 text-gray-500 font-medium'>Loan Id</td>
          <td className='w-40 xl:w-auto px-2 py-4 text-gray-500 font-medium'>Loan application date</td>
          <td className='w-32 xl:w-auto px-2 py-4 text-gray-500 font-medium'>FPO Name</td>
          <td className='w-32 xl:w-auto px-2 py-4 text-gray-500 font-medium'>
            <DropDownWrapper
              list={rmNames}
              onClk={setFilterByRM}
              active={filterByRM}
              activeCls='bg-[#a3dc5d]'
              rootCls='p-0'
            >
              RM name
            </DropDownWrapper>
          </td>
          <td className='w-32 xl:w-auto px-2 py-4 text-gray-500 font-medium'>Proposed loan amount</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium leading-5'>Interest rate</td>
          <td className='w-80 px-2 py-4 xl:pr-12 text-gray-500 font-medium'>Reason for rejection (Comment of credit committee)</td>
        </tr>
      </thead>

      <tbody>
        {
          finalData.map(d => (
            <tr key={d.id} className='text-sm'>
              <td className='pl-4 xl:pl-12 pr-2 py-1'>{d.loanId}</td>
              <td className='px-2 py-1'>{d.start}</td>
              <td className='px-2 py-1'>{d.fpo}</td>
              <td className='px-2 py-1'>{d.name}</td>
              <td className='px-2 py-1'>&#8377; {d.amount}</td>
              <td className='px-2 py-1'>
                <button className='p-0' onClick={() => updateOpen('interest')}>14%</button>
              </td>
              <td className='px-2 py-1 xl:pr-12'>
                Document is not correct
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

function ProcessTable({ data = [], updateOpen }) {
  const [filterByRM, setFilterByRM] = useState('None')
  const [rmNames, setRmNames] = useState([])

  useEffect(() => {
    let filteredNames = [...new Set(data.map(p => p.name))]
    setRmNames([...new Set(["None", ...filteredNames])])
  }, [data])

  const finalData = useMemo(() => {
    let final = data
    if (filterByRM !== "None") {
      final = final.filter(n => n.name === filterByRM)
    }

    return final
  }, [filterByRM, data])

  return (
    <table className='w-full table-fixed'>
      <thead>
        <tr className='sticky top-0 bg-white text-left'>
          <td className='w-28 pl-4 xl:pl-12 pr-2 py-4 text-gray-500 font-medium'>Loan Id</td>
          <td className='w-40 px-2 py-4 text-gray-500 font-medium'>Loan application date</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium'>FPO Name</td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium'>
            <DropDownWrapper
              list={rmNames}
              onClk={setFilterByRM}
              active={filterByRM}
              activeCls='bg-[#a3dc5d]'
              rootCls='p-0'
            >
              RM name
            </DropDownWrapper>
          </td>
          <td className='w-32 px-2 py-4 text-gray-500 font-medium'>Proposed loan amount</td>
          <td className='w-24 px-2 py-4 text-gray-500 font-medium'>Interest rate</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium'>Action</td>
          <td className='w-28 px-2 py-4 text-gray-500 font-medium'>Status</td>
        </tr>
      </thead>

      <tbody>
        {
          finalData.map((d, i) => (
            <tr key={d.id} className='text-sm'>
              <td className='pl-4 xl:pl-12 pr-2 py-1'>{d.loanId}</td>
              <td className='px-2 py-1'>{d.start}</td>
              <td className='px-2 py-1'>{d.fpo}</td>
              <td className='px-2 py-1'>{d.name}</td>
              <td className='px-2 py-1'>&#8377; {d.amount}</td>
              <td className='px-2 py-1'>
                <button className='p-0' onClick={() => updateOpen('interest')}>14%</button>
              </td>
              <td className='px-2 py-1'>
                {
                  i % 3 !== 0
                    ?
                    <button
                      className='w-20 py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                      onClick={() => updateOpen('Status', 'View')}
                    >
                      View
                    </button>
                    :
                    <button
                      className='w-20 py-0.5 bg-red-200 hover:bg-red-300 text-xs'
                      onClick={() => updateOpen('Status')}
                    >
                      Update
                    </button>
                }
              </td>
              <td className='px-2 py-1'>
                <button
                  className='py-0.5 bg-[#bdf579] hover:bg-[#a3dc5d] text-xs'
                  onClick={() => updateOpen('OtherStatus')}
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
    <section className='dfc gap-4 h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='df gap-4 px-8 pt-4'>
        <h1 className='text-2xl'>Loan Information</h1>
      </div>

      <Tabs
        tabsList={lists}
        listClass='mx-6'
        tabClass='pb-2'
        panelClass='scroll-y mx-4 my-2 bg-white'
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
        open === 'View' &&
        <CreateLoanModal
          type={open}
          data={open !== "Create" ? emptyDetails : false}
          isOpen
          closeModal={closeModal}
        />
      }

      {
        open === 'Status' &&
        <StatusUpdate
          isOpen
          type={type}
          data={type ? statusData : false}
          closeModal={closeModal}
        />
      }

      {
        open === 'Repayment' &&
        <RepaymentStructure
          isOpen
          closeModal={closeModal}
        />
      }

      {
        open === 'OtherStatus' &&
        <OthersStatus
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
    </section>
  )
}

export default Loan