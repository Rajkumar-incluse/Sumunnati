import Modal, { ModalHeader } from '../../UIComp/Modal';
import gst from '../../../assets/img/gst.jpg';

function DisbursementLetter({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      contentCls='dfc w-[400px] h-[500px] relative'
    >
      <ModalHeader
        title="Disbursement request Letter"
        closeModal={closeModal}
      />

      <img src={gst} alt="gst" />
    </Modal>
  )
}

export default DisbursementLetter