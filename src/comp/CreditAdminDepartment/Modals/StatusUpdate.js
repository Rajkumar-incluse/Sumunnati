import { useState } from 'react';
import { ReactComponent as Close } from '../../../assets/svg/actions/close.svg';
import { ReactComponent as Tick } from '../../../assets/svg/common/tick.svg';
import Modal, { ModalHeader } from '../../UIComp/Modal';

function StatusUpdate({ isOpen, data, type, closeModal }) {
  const [confirmed, setConfirmed] = useState(type === "View" ? data.confirmed : false)
  const [comment, setComment] = useState(type === "View" ? data.comment : '')
  const [status, setStatus] = useState(type === "View" ? data.status : '')

  const updateStatus = val => {
    if (type === "View") return;
    setStatus(val)
  }

  return (
    <Modal
      isOpen={isOpen}
      contentCls='w-[450px]'
    >
      <ModalHeader
        title=''
        closeModal={closeModal}
      />

      <div className='df gap-8 mb-6 font-medium text-lg'>
        <div className='font-medium mb-1'>Status : </div>
        <div
          className={`dfc w-24 items-center ml-auto py-4 px-8 rounded-lg border cursor-pointer ${status === 'Accept' ? "border-green-600" : ""}`}
          onClick={() => updateStatus('Accept')}
        >
          <Tick className={`w-12 h-12 ${status === 'Accept' ? '[--svg-color:rgb(22,163,74)]' : ''}`} />
          <p className={status === 'Accept' ? 'text-green-600' : ''}>Accept</p>
        </div>

        <div
          className={`dfc w-24 items-center mr-auto py-4 px-8 rounded-lg border cursor-pointer ${status === 'Reject' ? "border-red-600" : ""}`}
          onClick={() => updateStatus('Reject')}
        >
          <Close className={`w-12 h-12 ${status === 'Reject' ? '[--svg-color:rgb(220,38,38)]' : ''}`} />
          <p className={status === 'Reject' ? 'text-red-600' : ''}>Reject</p>
        </div>
      </div>

      <div className='font-medium mb-1'>Comment : </div>
      <textarea
        cols="30"
        className='max-h-40'
        value={comment}
        onChange={e => setComment(e.target.value)}
        disabled={type === "View"}
      ></textarea>

      <div className='mt-4 leading-4 text-slate-500'>
        Please make sure you have verified every fields and documents.
      </div>

      <div className='df gap-1 mt-2 mb-4'>
        <input
          type="checkbox"
          id='confirm'
          className='w-fit'
          checked={confirmed}
          onChange={() => setConfirmed(p => !p)}
          disabled={type === "View"}
        />
        <label htmlFor="confirm" className='mt-1'>I hereby confirm</label>
      </div>

      {
        type !== "View" &&
        <button
          className='block w-3/4 mx-auto bg-[#a3dc5d] disabled:bg-[#b9e287] disabled:cursor-not-allowed'
          onClick={closeModal}
          disabled={!status || !confirmed}
        >
          Update
        </button>
      }
    </Modal>
  )
}

export default StatusUpdate