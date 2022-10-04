import getRandom from '../../helper/getRandom';
import data from '../../dummy/manager/dpr';

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
              <td className='px-2 py-4 text-gray-500 font-medium'>Status</td>
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
                    <button className={`w-24 h-6 p-0 text-sm text-center rounded-full ${d.status === "Active" ? "bg-green-200 text-green-800" : ""} ${d.status === "De-active" ? "bg-red-200 text-red-900" : ""}`}>
                      {d.status}
                    </button>
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