import { useState } from 'react';
import InputWithLabel from '../../Common/InputWithLabel';

function Step2({ type, details, onChange }) {
  const [options] = useState({
    PSL: ["PSL farm credit", "PSL other agri", "PSL MSME", 'Weaker section', 'Others'],
    Average_tenor: ['Days', 'Months'],
  })

  return (
    <>
      <InputWithLabel
        isSelect
        name='PSL'
        value={details.PSL}
        options={options.PSL}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        isPercentage
        type='number'
        name='Coupon_rate'
        lable='Coupon rate'
        value={details.Coupon_rate}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        name='Payment_terms'
        lable='Payment terms'
        value={details.Payment_terms}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        name='Nature_of_underlying_asset'
        lable='Nature of underlying asset'
        value={details.Nature_of_underlying_asset}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        isSelect
        name='Average_tenor'
        lable='Average tenor'
        value={details.Average_tenor}
        options={options.Average_tenor}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputFileWithLabel
        val={type}
        updateImg={updateImg}
        lable='Tentative term-sheet'
      />

      <InputWithLabel
        type='number'
        name='Number_of_obligors'
        lable='Number of obligors'
        value={details.Number_of_obligors}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        isRupee
        type='number'
        name='Consideration_amount'
        lable='Consideration amount'
        value={details.Consideration_amount}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        type='date'
        name='Cut_off_date'
        lable='Cut-off date'
        value={details.Cut_off_date}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        name='Asignee'
        value={details.Asignee}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        name='Originator'
        value={details.Originator}
        onChange={onChange}
        disabled={type === "View"}
      />
    </>
  )
}

export default Step2