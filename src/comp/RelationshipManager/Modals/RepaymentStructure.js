import Modal, { ModalHeader } from '../../UIComp/Modal';

function RepaymentStructure({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      contentCls='w-[400px] h-[300px]'
    >
      <ModalHeader
        title="Repayment structure"
        closeModal={closeModal}
      />

    </Modal>
  )
}

export default RepaymentStructure