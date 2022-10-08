import { useState } from 'react';
import Modal, { ModalHeader } from '../../UIComp/Modal';

function InProgressStatus({ isOpen, type, closeModal }) {
  const [confirmed, setConfirmed] = useState(false)
  const [comment, setComment] = useState(type === "View" ? "Some comment added" : '')
  const [status, setStatus] = useState(type === "View" ? "Approved" : "")

  return (
    <Modal
      isOpen={isOpen}
      contentCls='w-[450px]'
    >
      <ModalHeader
        title="Status"
        closeModal={closeModal}
      />

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

export default InProgressStatus