import Modal, { ModalHeader } from '../../UIComp/Modal';

const data = [
  {
    role: 'Credit Admin',
    status: 'Accepted',
    comment: 'Some comment added by Credit Admin.'
  },
]

function OthersStatus({ isOpen, closeModal }) {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader
        title="Status"
        closeModal={closeModal}
      />

      <table className='w-full'>
        <tr className='border'>
          <td className="px-4 py-2 font-medium">Role</td>
          <td className="px-4 py-2 font-medium">Status</td>
          <td className="px-4 py-2 font-medium">Comment</td>
        </tr>

        {
          data.map(d => (
            <tr key={d.role} className='border'>
              <td className="px-4 py-2">{d.role}</td>
              <td className="px-4 py-2">
                <button className={` text-sm ${d.status === "Accepted" ? "bg-green-200 text-green-800" : ""} ${d.status === "Rejected" ? "bg-red-200 text-red-900" : ""} ${d.status === "Pending" ? "bg-yellow-200 text-yellow-900" : ""}`}>
                  {d.status}
                </button>
              </td>
              <td className="px-4 py-2">{d.status !== "Pending" ? d.comment : '-'}</td>
            </tr>
          ))
        }
      </table>
    </Modal>
  )
}

export default OthersStatus