import { ReactComponent as Add } from '../../../../assets/svg/actions/add.svg';
import InputFileWithLabel from '../../../Common/InputFileWithLabel';

function Step5({
  type, extraDocs, details, updateImg,
  addNewOtherDoc, onChangeOtherDocLable
}) {
  return (
    <>
      <h1 className='mb-2 text-lg font-medium'>Other documents</h1>
      {
        type === "View" &&
        details?.otherDocs?.map(d => (
          <InputFileWithLabel
            key={d}
            val={type}
            lable={d}
            updateImg={updateImg}
          />
        ))
      }

      {
        type !== "View" &&
        <>
          {
            extraDocs.map((ed, i) => (
              <div
                key={ed.key}
                className='mb-4'
              >
                <input
                  type="text"
                  className='mb-1'
                  placeholder='Label Name'
                  value={ed.label}
                  onChange={e => onChangeOtherDocLable(e, i)}
                />
                {
                  ed.isInput
                    ? <input type='file' />
                    : <InputFileWithLabel
                      val={type}
                      updateImg={updateImg}
                    />
                }
              </div>
            ))
          }

          <Add
            onClick={addNewOtherDoc}
            className='ml-auto mb-4 hover:[--svg-color:rgb(34,197,94)]'
          />
        </>
      }
    </>
  )
}

export default Step5