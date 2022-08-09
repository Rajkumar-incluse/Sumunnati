import { useEffect, useMemo, useState } from 'react';
import dummyData from '../../dummy/manager/dpr';

import { ReactComponent as Dot } from '../../assets/svg/common/dot.svg';
import CreateLoanModal from './Modals/CreateLoanModal';
import { DropDownWrapper } from '../UIComp/DropDown';
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

function Row({ d, type, updateOpen, updateStatus }) {
  return (
    <tr className='text-sm'>
      <td className='pl-12 pr-2 py-1'>{d.loanId}</td>
      <td className='px-2 py-1'>{d.fpo}</td>
      <td className='px-2 py-1'>&#8377; {d.amount}</td>
      <td className='px-2 py-1'>{d.name}</td>
      {
        type === "Pending" &&
        <td className='px-2 py-1'>
          <button
            className='py-px bg-[#a3dc5d] rounded-full'
            onClick={updateStatus}
          >
            Update
          </button>
        </td>
      }
      <td className='px-2 py-1'>
        <DropDownWrapper
          needArrow
          list={['View']}
          onClk={val => updateOpen(val)}
        >
          <Dot className='w-5 h-5 [--svg-color:#333]' />
        </DropDownWrapper>
      </td>
    </tr>
  )
}

function Table({ type, data, updateOpen }) {
  const [statusModal, setStatusModal] = useState(false)
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
  }, [data, filterByRM])

  const updateStatus = () => setStatusModal(p => !p)

  return (
    <>
      <table className='w-full'>
        <thead>
          <tr className='sticky top-0 bg-white text-left'>
            <td className='pl-12 pr-2 py-4 text-gray-500 font-medium'>Loan Id</td>
            <td className='px-2 py-4 text-gray-500 font-medium'>FPO Name</td>
            <td className='px-2 py-4 text-gray-500 font-medium'>Proposed Loan amount</td>
            <td className='px-2 py-4 text-gray-500 font-medium'>
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
            {
              type === "Pending" &&
              <td className='px-2 py-4 text-gray-500 font-medium'>Action</td>
            }
            <td className='px-2 py-4 text-gray-500 font-medium'></td>
          </tr>
        </thead>

        <tbody>
          {
            finalData.map(d => (
              <Row
                updateStatus={updateStatus}
                updateOpen={updateOpen}
                type={type}
                key={d.id}
                d={d}
              />
            ))
          }
        </tbody>
      </table>

      {
        statusModal &&
        <StatusUpdate
          isOpen
          closeModal={updateStatus}
        />
      }
    </>
  )
}

const lists = ["Accepted", "Rejected", "Pending"]

function Loan() {
  const [open, setOpen] = useState("")

  const updateOpen = val => setOpen(val)

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
        {
          lists.map(l => (
            <Table
              key={l}
              type={l}
              data={dummyData.filter(d => d.appOrRe === l)}
              updateOpen={updateOpen}
            />
          ))
        }
      </Tabs>

      {
        !!open &&
        <CreateLoanModal
          type={open}
          data={open !== "Create" ? emptyDetails : false}
          isOpen
          closeModal={() => updateOpen('')}
        />
      }
    </section>
  )
}

export default Loan