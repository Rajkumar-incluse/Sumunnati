import { ReactComponent as Dot } from '../../assets/svg/common/dot.svg';
import { DropDownWrapper } from '../UIComp/DropDown';

import getRandom from '../../helper/getRandom';
import data from '../../dummy/manager/dpr';

const l1 = ["Activate"]
const l2 = ["De-activate"]

function FPO() {
  return (
    <section className='dfc h-full overflow-y-hidden bg-[#f7f7f7]'>
      <div className='df gap-4 mt-4 px-8 py-4'>
        <h1 className='text-2xl'>FPO Information</h1>
      </div>

      <div className='scroll-y mx-4 my-2 bg-white'>
        <table className='w-full'>
          <thead>
            <tr className='sticky top-0 bg-white text-left'>
              <td className='pl-12 pr-2 py-4 text-gray-500 font-medium'>FPO Id</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>FPO Name</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>CEO Name</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Phone</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Email</td>
              <td className='px-2 py-4 text-gray-500 font-medium'>Location</td>
              <td className='px-2 py-4 text-gray-500 font-medium'></td>
            </tr>
          </thead>

          <tbody>
            {
              data.map((d, i) => (
                <tr key={d.id} className='text-sm'>
                  <td className='pl-12 pr-2 py-1'>2022-{getRandom(10, 100)}-07</td>
                  <td className='px-2 py-1'>{d.fpo}</td>
                  <td className='px-2 py-1'>{d.name}</td>
                  <td className='px-2 py-1'>{d.phone}</td>
                  <td className='px-2 py-1'>{d.email}</td>
                  <td className='px-2 py-1'>{d.location}</td>
                  <td className='px-2 py-1'>
                    <DropDownWrapper
                      list={i % 2 === 0 ? l2 : l1}
                      needArrow
                    >
                      <Dot className="w-4" />
                    </DropDownWrapper>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default FPO