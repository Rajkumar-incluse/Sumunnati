import { useState } from 'react';
import Modal, { ModalHeader } from '../../UIComp/Modal';
import InputWithLabel from '../../Common/InputWithLabel';

const list = ["CIBIL", "Highmark", "EQUIFAX", "Worldcheck", "Experian"]

function BureauCheck({ isOpen, closeModal }) {
  const [details, setDetails] = useState(list.reduce((prev, curr) => {
    prev[curr] = ''
    return prev
  }, { ESMS: '' }))

  const onChage = e => {
    setDetails(p => ({
      ...p,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Modal
      isOpen={isOpen}
      contentCls='w-[450px]'
    >
      <ModalHeader
        title='Bureau Check'
        closeModal={closeModal}
      />

      {
        list.map(l => (
          <InputWithLabel
            key={l}
            name={l}
            type='number'
            value={details[l]}
            onChage={onChage}
          />
        ))
      }

      <div className='mb-4'>
        <label className='mb-1' htmlFor="esms-bu">ESMS</label>
        <select
          id='esms-bu'
          name='ESMS'
          onChange={onChage}
          value={details.ESMS}
          onChage={onChage}
        >
          <option value="" disabled></option>
          <option value="Applicable">Applicable</option>
          <option value="Not applicable">Not applicable</option>
        </select>
      </div>

      <button
        className='block w-3/4 mx-auto bg-[#a3dc5d] disabled:bg-[#b9e287] disabled:cursor-not-allowed'
        onClick={closeModal}
      >
        Update
      </button>
    </Modal>
  )
}

export default BureauCheck