import Modal, { ModalHeader } from '../../UIComp/Modal';

function LoanRepaymentSchedule({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      contentCls='dfc w-[400px] h-[400px]'
    >
      <ModalHeader
        title="Loan Repayment Schedule"
        closeModal={closeModal}
      />

    </Modal>
  )
}

export default LoanRepaymentSchedule