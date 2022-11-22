import InputFileWithLabel from '../../Common/InputFileWithLabel';

function Step5({ type, details, updateImg }) {
  return (
    <>
      <h1 className='mb-2 text-lg font-medium'>Other documents</h1>
      {
        details?.otherDocs?.map(d => (
          <InputFileWithLabel
            key={d}
            val={type}
            lable={d}
            updateImg={updateImg}
          />
        ))
      }
    </>
  )
}

export default Step5