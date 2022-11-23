import { ReactComponent as Close } from '../../../../assets/svg/actions/close.svg';
import gst from '../../../../assets/img/gst.jpg';

function ShowDoc({ updateImg }) {
  return (
    <div className='absolute p-4 bg-slate-50 inset-0 z-10'>
      <div className='df justify-end'>
        <Close className='w-8 h-8' onClick={updateImg} />
      </div>

      <img src={gst} alt="gst" />
    </div>
  )
}

export default ShowDoc