import { useState } from 'react';
import Modal, { ModalHeader } from '../../UIComp/Modal';

const data2 = [
  {
    key: "1",
    name: "Due date",
    desc: "12.12.22",
  },
  {
    key: "2",
    name: "Due amount",
    desc: "120000",
  },
  {
    key: "3",
    name: "Date of Receipt",
    desc: "13.12.22",
  },
  {
    key: "4",
    name: "Recieved amount",
    desc: "100000",
  },
  {
    key: "5",
    name: "Outstanding amount",
    desc: "20000",
  },
]

function LoanRepaymentStatus({ isOpen, closeModal, role = "" }) {
  const [title, setTitle] = useState(role === "relationship_manager" ? "Record payments" : "Payment history")
  const [data, setData] = useState({
    amountReceived: "",
    amount: "",
    date: ""
  })

  const onChange = e => {
    setData(p => ({
      ...p,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Modal
      isOpen={isOpen}
      contentCls='dfc w-[400px]'
    >
      <ModalHeader
        title={title}
        closeModal={closeModal}
      />

      {
        title === "Record payments" &&
        <>
          <div className='df mb-4'>
            <p className='w-60 leading-[1.2]'>Due Date</p>
            <p>:</p>
            <input
              disabled
              type="text"
              defaultValue="12.12.22"
            />
          </div>

          <div className='df mb-4'>
            <p className='w-60 leading-[1.2]'>Due Amount</p>
            <p>:</p>
            <input
              disabled
              type="text"
              defaultValue="1234567"
            />
          </div>

          <div className='df mb-4'>
            <p className='w-60 leading-[1.2]'>Amount received</p>
            <p>:</p>
            <select
              value={data.amountReceived}
              name="amountReceived"
              onChange={onChange}
            >
              <option value="" disabled></option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className='df mb-4 relative'>
            <p className='w-60 leading-[1.2]'>Amount</p>
            <p>:</p>
            <input
              name='amount'
              type="number"
              value={data.amount}
              onChange={onChange}
              className="no-number-arrows pr-5"
            />
            <p className='dc px-2 absolute top-0 right-0 h-full'>&#8377;</p>
          </div>

          <div className='df mb-4'>
            <p className='w-60 leading-[1.2]'>Date</p>
            <p>:</p>
            <input
              type="date"
              name="date"
              value={data.date}
              onChange={onChange}
            />
          </div>

          <div className='df'>
            <button
              className='mr-auto bg-[#bdf579] hover:bg-[#a3dc5d]'
            >
              Submit
            </button>

            <button
              className='bg-[#bdf579] hover:bg-[#a3dc5d]'
              onClick={() => setTitle("Payment history")}
            >
              Payment history
            </button>
          </div>
        </>
      }

      {
        title === "Payment history" &&
        <>
          {
            data2.map(d => (
              <div className='df mb-4' key={d.key}>
                <p className='w-60 leading-[1.2]'>{d.name}</p>
                <p>:</p>
                <input
                  disabled
                  type="text"
                  defaultValue={d.desc}
                />
              </div>
            ))
          }

          {
            role === "relationship_manager" &&
            <button
              className='bg-[#bdf579] hover:bg-[#a3dc5d]'
              onClick={() => setTitle("Record payments")}
            >
              Previous
            </button>
          }
        </>
      }
    </Modal>
  )
}

export default LoanRepaymentStatus