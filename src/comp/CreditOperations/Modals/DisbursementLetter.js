import { useState } from 'react';
import InputFileWithLabel from '../../Common/InputFileWithLabel';
import Modal, { ModalHeader } from '../../UIComp/Modal';
import { ReactComponent as Close } from '../../../assets/svg/actions/close.svg';
import gst from '../../../assets/img/gst.jpg';

function DisbursementLetter({ isOpen, type, closeModal }) {
  const [showImg, setShowImg] = useState(false)

  const updateImg = () => setShowImg(p => !p)

  return (
    <Modal
      isOpen={isOpen}
      contentCls={`dfc w-[400px] ${!showImg ? "h-[250px]" : "h-[500px]"} relative`}
    >
      <ModalHeader
        title="Disbursement request Letter"
        closeModal={closeModal}
      />

      {
        showImg &&
        <div className='absolute p-4 bg-slate-50 inset-0 z-10'>
          <div className='df justify-end'>
            <Close className='w-8 h-8' onClick={updateImg} />
          </div>

          <img src={gst} alt="gst" />
        </div>
      }

      <InputFileWithLabel
        val={type}
        updateImg={updateImg}
        lable='Disbursement request letter'
      />

      {
        type === 'Create' &&
        <button
          className='ml-auto bg-[#a3dc5d] hover:scale-105'
        >
          Submit
        </button>
      }
    </Modal>
  )
}

export default DisbursementLetter