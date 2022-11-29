import { ReactComponent as Close } from '../../../../assets/svg/actions/close.svg';

function ShowDoc({ showImg, updateImg }) {
  return (
    <div className='absolute p-4 bg-slate-50 inset-0 z-10'>
      <div className='df justify-end'>
        <Close className='w-8 h-8' onClick={() => updateImg("")} />
      </div>

      <img
        className='w-full'
        src={`https://colendingdocs.s3.ap-south-1.amazonaws.com/${showImg}`}
        alt=""
      />
    </div>
  )
}

export default ShowDoc