import { useRef } from 'react';
import Modal, { ModalHeader } from '../../UIComp/Modal';
import user from '../../../assets/img/user.png';

const list = ["Relationship Manager", "Credit Manager", "Credit committee", "Credit Administration", "Central Co-lending Unit", "Credit Operations", "Operations", "SBI"]

function AddMember({ isOpen, closeModal }) {
  const inputRef = useRef()

  const onChange = e => {
    // let files = e.target.files
    // const allFiles = Object.keys(files).map(each => files[each])
    // inputRef.current.value = ""
  }

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      contentCls='w-[450px]'
    >
      <ModalHeader
        title='Add Member'
        closeModal={closeModal}
      />

      <div className='dc mt-8'>
        <div
          className='w-32 h-32 rounded-full bg-slate-200 cursor-pointer'
          onClick={() => inputRef.current.click()}
        >
          <img src={user} alt="user" />
        </div>

        <input
          onClickCapture={e => e.stopPropagation()}
          className='hidden'
          onChange={onChange}
          type="file"
          ref={inputRef}
        />
      </div>

      <div className='grid grid-cols-2 gap-4 mt-8'>
        <div>
          <label htmlFor="">First Name</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">Last Name</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">Mobile</label>
          <input type="text" />
        </div>

        <div className='col-span-2'>
          <label htmlFor="">Role</label>
          <select name="" id="">
            <option value="" disabled></option>
            {
              list.map(li => (
                <option key={li} value={li}>{li}</option>
              ))
            }
          </select>
        </div>
      </div>

      <button className='block w-1/2 mx-auto mt-12 bg-[#477213] text-white hover:bg-[#739c47] hover:scale-105 transition-transform rounded'>
        Create
      </button>
    </Modal>
  )
}

export default AddMember