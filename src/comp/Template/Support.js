import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSupport } from '../../action-reducers/admin/adminAction';

import supportImg from '../../assets/svg/common/support2.svg';

function Support() {
  const [supportQuery, setSupportQuery] = useState('')

  const updateText = () => {
    setSupportQuery('');
  }

  return (
    <section className='df gap-12 h-full p-8 overflow-y-hidden bg-[#f7f7f7]'>
      <div className='flex-1'>
        <textarea className="mb-8 h-96" id={'query' } value={ supportQuery} placeholder='Enter your queries...' onChange={(e) => {setSupportQuery(e.target.value)}}>
        </textarea>

        <button
          className="w-40 block mx-auto bg-[#a3dc5d] hover:bg-[#74a03e]" onClick={() => getSupport(supportQuery, updateText)}
        >
          Submit
        </button>
      </div>

      <div className='df px-8 h-[inherit]'>
        <img
          className='w-96'
          src={supportImg}
          alt="Support"
        />
      </div>
    </section>
  )
}

export default Support