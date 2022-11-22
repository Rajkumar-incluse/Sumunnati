import { useState } from 'react';
import InputWithLabel from '../../Common/InputWithLabel';

function Step1({ type, details, onChange }) {
  const [options] = useState({
    Interest_repayment: ["Upfront", "Monthly", "Quartely", "Half-yearly", "Annually", "EMI", "Others"],
    Security: ["Hypothecation of current asset", "Mortgage-Commercial", "Mortgage-Residence", "Corporate guarantee", "Personnel Guarantee", "UDC-PDC", "Pledge of shares", "Warehouse receipt", "Lien", "FD", "Charge on plant-machinery-Equipment", "Vehicle hypothecation"],
  })

  return (
    <>
      <InputFileWithLabel
        val={type}
        updateImg={updateImg}
        lable='Principal repayment'
      />

      <InputWithLabel
        isSelect
        name='Interest_repayment'
        lable='Interest repayment'
        options={options.Interest_repayment}
        value={details.Interest_repayment}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputFileWithLabel
        val={type}
        updateImg={updateImg}
        lable='Interest repayment'
      />

      <InputWithLabel
        isSelect
        name='Security'
        options={options.Security}
        value={details.Security}
        onChange={onChange}
        disabled={type === "View"}
      />

      <div className='mb-4'>
        <label className='mb-1' htmlFor="idSecurityremarks">Security remarks</label>
        <textarea
          id='idSecurityremarks'
          name='Security_remarks'
          value={details.Security_remarks}
          onChange={onChange}
          disabled={type === "View"}
        ></textarea>
      </div>

      <InputWithLabel
        isPercentage
        type='number'
        name='Rate_of_Interest'
        lable='Rate of Interest'
        value={details.Rate_of_Interest}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        isPercentage
        type='number'
        name='Referral_fee'
        lable='Referral fee'
        value={details.Referral_fee}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        isPercentage
        type='number'
        name='Processing_fee'
        lable='Processing fee'
        value={details.Processing_fee}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputFileWithLabel
        val={type}
        updateImg={updateImg}
        lable='Other supporting documents'
      />

      <InputWithLabel
        name='Name_of_the_pool'
        lable='Name of the pool'
        value={details.Name_of_the_pool}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        isPercentage
        type='number'
        name='Average_yield'
        lable='Average yield'
        value={details.Average_yield}
        onChange={onChange}
        disabled={type === "View"}
      />
    </>
  )
}

export default Step1