import { useState } from 'react';
import getRandom from '../../../helper/getRandom';
import InputWithLabel from '../../Common/InputWithLabel';

function Step0({ type, details, onChange }) {
  const [options] = useState({
    Arrangement: ["Co lending", "Business correspondent", "Direct Origination", "PTC", "Direct Assignment", "Other structured assets"],
    Tenure: ['Days', 'Months', 'Year'],
    Purpose: ["ARF", "Infra", "Input", "Output", "Gold loan", "Cattle loan", "SME", "Trade finance", "WHR", "Others"],
    Nature_of_facility: ['STL', 'MTL', 'LTL'],
    Revolving: ['Revolving', 'Non-revolving'],
    Principal_repayment: ['Monthly', 'Quartely', 'Half-yearly', 'Annually', 'Others'],
  })

  return (
    <>
      <InputWithLabel
        lable='Transaction number/ID'
        value={`2022${getRandom(0, 1000)}07`}
        disabled
      />

      <InputWithLabel
        name='Name'
        value={details.Name}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        isSelect
        name='Arrangement'
        value={details.Arrangement}
        options={options.Arrangement}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        type='number'
        name='Aggregate_disbursement'
        lable='Aggregate disbursement'
        value={details.Aggregate_disbursement}
        onChange={onChange}
        disabled={type === "View"}
      />

      <div className='mb-4'>
        <label htmlFor='tenure'>Tenure</label>
        <div className='df'>
          <input
            type="text"
            name='TenureNumber'
            value={details.TenureNumber}
            disabled={type === "View"}
            onChange={onChange}
          />

          <select
            id='tenure'
            name='Tenure'
            value={details.Tenure}
            onChange={onChange}
            disabled={type === "View"}
          >
            <option value="" disabled></option>
            {
              options.Tenure.map(op => (
                <option key={op} value={op}>{op}</option>
              ))
            }
          </select>
        </div>
      </div>

      <InputWithLabel
        type='number'
        name='Validity_of_limit'
        lable='Validity of limit'
        value={details.Validity_of_limit}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        isSelect
        name='Purpose'
        options={options.Purpose}
        value={details.Purpose}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        isSelect
        name='Nature_of_facility'
        lable='Nature of facility'
        options={options.Nature_of_facility}
        value={details.Nature_of_facility}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        isSelect
        lable='Revolving/Non-revolving'
        options={options.Revolving}
        value={details.Revolving}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        name='Margin'
        type='number'
        value={details.Margin}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        isSelect
        name='Principal_repayment'
        lable='Principal repayment'
        options={options.Principal_repayment}
        value={details.Principal_repayment}
        onChange={onChange}
        disabled={type === "View"}
      />
    </>
  )
}

export default Step0