import { useId, useState } from 'react';

function InputFileWithLabel({
  lable = '', wrapperCls = 'mb-4', labelCls = 'mb-1',
  inputCls = '', onChage = () => { }, val = '', updateImg
}) {
  const [isUpdate, setIsUpdate] = useState(false)
  const id = useId()

  return (
    <div className={wrapperCls}>
      {
        lable &&
        <label htmlFor={id} className={labelCls}>
          {lable}
        </label>
      }

      {
        (val === "Create" || isUpdate) &&
        <input
          type="file"
          id={id}
          onChange={onChage}
          className={`mb-1 ${inputCls}`}
        />
      }

      {
        val !== "Create" &&
        <button
          className='px-2 py-0.5 bg-[#a3dc5d] text-white text-sm'
          onClick={updateImg}
        >
          View
        </button>
      }

      {
        val === "Edit" &&
        <button
          className='inline-block ml-2 px-2 py-0.5 bg-[#a3dc5d] text-white text-sm'
          onClick={() => setIsUpdate(p => !p)}
        >
          Update
        </button>
      }
    </div>
  )
}

export default InputFileWithLabel