import { useState } from 'react';
import SelectWithInput from '../../../UIComp/SelectWithInput';

function AddFPOName({ value = '', onClick = () => { } }) {
  return (
    <div className='df flex-wrap py-2 px-4'>
      <p className='text-xs xl:text-[13px] 2xl:text-sm'>Add New FPO:</p>
      <button
        className='bg-[#bdf579] font-medium'
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  )
}

function FpoName({ disabled, FPO_Name, setDetails }) {
  const [query, setQuery] = useState('')

  return (
    <SelectWithInput
      list={["Anughraha FPO", "ABCD FPO", "Samrthi FPO"]}
      lable='FPO Name'
      btnCls='mb-4'
      value={FPO_Name}
      query={query}
      setQuery={setQuery}
      disabled={disabled}
      onChange={v => setDetails(pr => ({
        ...pr,
        FPO_Name: v
      }))}
      NotFoundComp={
        <AddFPOName
          value={query}
          onClick={() => {
            setDetails(pr => ({
              ...pr,
              FPO_Name: query
            }))
            document.body.click()
          }}
        />
      }
    />
  )
}

export default FpoName