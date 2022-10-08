import { useState } from 'react';
import Modal, { ModalHeader } from '../../UIComp/Modal';
import { ReactComponent as Close } from '../../../assets/svg/actions/close.svg';
import gst from '../../../assets/img/gst.jpg';

function LimitAppraisal({ isOpen, type, closeModal, openBueroCheck }) {
  const [confirmed, setConfirmed] = useState(false)
  const [comment, setComment] = useState(type === "View" ? "Some comment added" : '')
  const [status, setStatus] = useState(type === "View" ? "Approved" : "")
  const [show, setShow] = useState(false)

  const updateShow = () => setShow(p => !p)

  return (
    <Modal
      isOpen={isOpen}
      contentCls={`w-[400px] relative ${show ? "h-[500px]" : ""}`}
    >
      <ModalHeader
        title="Loan Limit Appraisal"
        closeModal={closeModal}
      />

      {
        show &&
        <div className='absolute p-4 bg-slate-50 inset-0 z-10 rounded-2xl'>
          <div className='df justify-end'>
            <Close className='w-8 h-8' onClick={updateShow} />
          </div>

          <img src={gst} alt="gst" />
        </div>
      }

      <div className='df gap-4 my-4'>
        <p className='w-52'>Income statements :</p>
        <button
          onClick={updateShow}
          className="py-0.5 bg-[#bdf579] text-sm"
        >
          View
        </button>
      </div>

      <div className='df gap-4 my-4'>
        <p className='w-52'> Credit score/ Bureau check :</p>
        <button
          onClick={openBueroCheck}
          className="py-0.5 bg-[#bdf579] text-sm"
        >
          View
        </button>
      </div>

      <div className='mb-1'>Comment : </div>
      <textarea
        cols="30"
        className='max-h-40'
        value={comment}
        onChange={e => setComment(e.target.value)}
        disabled={type === "View"}
      ></textarea>

      {
        type !== "View" &&
        <div className='df gap-1 my-4'>
          <input
            type="checkbox"
            id='confirm'
            className='w-fit'
            checked={confirmed}
            onChange={() => setConfirmed(p => !p)}
          />
          <label htmlFor="confirm" className='mt-1'>I hereby confirm</label>
        </div>
      }

      <div className='df gap-4 my-4'>
        {
          !status ?
            <>
              <button
                onClick={() => setStatus("Approved")}
                disabled={!confirmed}
                className='w-full py-0.5 bg-[#bdf579] hover:bg-[#8bb657] disabled:opacity-80'
              >
                Approve
              </button>
              <button
                onClick={() => setStatus("Rejected")}
                disabled={!confirmed}
                className='w-full py-0.5 bg-red-200 hover:bg-red-300 disabled:opacity-80'
              >
                Reject
              </button>
            </>
            :
            <p className={status === "Approved" ? "text-[#86ba46]" : "text-red-500"}>{status}</p>
        }
      </div>
    </Modal>
  )
}

export default LimitAppraisal