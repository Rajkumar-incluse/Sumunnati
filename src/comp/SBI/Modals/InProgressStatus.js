import { useState } from 'react';
import Modal, { ModalHeader } from '../../UIComp/Modal';

function InProgressStatus({ isOpen, closeModal }) {
  const [confirmed, setConfirmed] = useState(false)
  const [status, setStatus] = useState("")

  return (
    <Modal
      isOpen={isOpen}
      contentCls='w-[450px]'
    >
      <ModalHeader
        title="Status"
        closeModal={closeModal}
      />

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
            status
        }
      </div>
    </Modal>
  )
}

export default InProgressStatus