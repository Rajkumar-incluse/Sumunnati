import { useState } from 'react';
import Select from 'react-select';

import InputWithLabel from '../../Common/InputWithLabel';

function Step3({ type, details, onChange, onBureauChange }) {
  const [options] = useState({
    Bureau_check: ["CIBIL", "Highmark", "EQUIFAX", "Worldcheck", "Experian"],
    Business_segment: ['Agri-processing', 'Food processing', 'Crop cultivation', 'Agri-infra', 'Trading', 'Service provider', 'Animal Husbandry'],
    Nature_of_security: ['Secured', 'Unsecured', 'soft comfort', 'Credit enhancement'],
    Guarantee: ['Fully', 'Partially', 'NIL Cover'],
  })

  return (
    <>
      <InputWithLabel
        isRupee
        type='number'
        name='Pool_size'
        lable='Pool size'
        value={details.Pool_size}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        type='date'
        name='Execution_date'
        lable='Execution date(Tentative)'
        value={details.Execution_date}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        type='date'
        name='Pool_maturity_date'
        lable='Pool maturity date'
        value={details.Pool_maturity_date}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        lable='FPO Grading data'
        value="hjkjhgf"
      />

      <InputWithLabel
        name='External_rating_Entity'
        lable='External rating(Entity)'
        value={details.External_rating_Entity}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        name='External_rating_Individual'
        lable='External rating(Individual)'
        value={details.External_rating_Individual}
        onChange={onChange}
        disabled={type === "View"}
      />

      <div className='mb-4'>
        <label htmlFor="Bureau_check">Bureau check</label>
        <Select
          closeMenuOnSelect={false}
          placeholder={type === "View" ? details.Bureau_check : ''}
          isDisabled={type === "View"}
          onChange={onBureauChange}
          options={options.Bureau_check.map(v => ({ value: v, label: v }))}
          value={details.Bureau_check}
          name='Bureau_check'
          isMulti
        />
      </div>

      <InputWithLabel
        name='ESMS'
        value={details.ESMS}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        name='Samunnati_score'
        lable='Samunnati score'
        value={details.Samunnati_score}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        isSelect
        name='Business_segment'
        lable='Business segment'
        options={options.Business_segment}
        value={details.Business_segment}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        isSelect
        name='Nature_of_security'
        lable='Nature of security'
        options={options.Nature_of_security}
        value={details.Nature_of_security}
        onChange={onChange}
        disabled={type === "View"}
      />

      <InputWithLabel
        isSelect
        name='Guarantee'
        options={options.Guarantee}
        value={details.Guarantee}
        onChange={onChange}
        disabled={type === "View"}
      />
    </>
  )
}

export default Step3