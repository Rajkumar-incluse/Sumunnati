import { useState } from 'react';

import Modal, { ModalHeader } from '../../../UIComp/Modal';
import ShowDoc from './ShowDoc';
import Step0 from './Step0';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Btns from './Btns';

const emptyDetails = {
  FPO_Name: '',
  Arrangement: '',
  Aggregate_disbursement: 0,
  Tenure: "",
  TenureNumber: "",
  Validity_of_limit: 0,
  Purpose: '',
  Nature_of_facility: '',
  Revolving: '',
  Margin: 0,
  Principal_repayment: '',
  Interest_repayment: '',
  Security: '',
  Security_remarks: "",
  Rate_of_Interest: 0,
  Referral_fee: 0,
  Processing_fee: 0,
  Name_of_the_pool: '',
  Average_yield: 0,
  PSL: '',
  Coupon_rate: 0,
  Payment_terms: '',
  Nature_of_underlying_asset: '',
  Average_tenor: '',
  Number_of_obligors: 0,
  Consideration_amount: 0,
  Cut_off_date: '',
  Asignee: '',
  Originator: '',
  Pool_size: 0,
  Execution_date: '',
  Pool_maturity_date: '',
  External_rating_Entity: '',
  External_rating_Individual: '',
  Bureau_check: [''],
  ESMS: '',
  Samunnati_score: '',
  Business_segment: '',
  Nature_of_security: '',
  Guarantee: '',
  otherDocs: []
}

function Loan({ type = '', isOpen, closeModal }) {
  const [extraDocs, setExtraDocs] = useState([{ key: 0, label: '', isInput: true }])
  const [details, setDetails] = useState({ ...emptyDetails })
  const [showImg, setShowImg] = useState(false)
  const [step, setStep] = useState(0)
  const disabled = type === "View"

  const updateImg = () => setShowImg(p => !p)

  const onChange = e => {
    setDetails(pr => ({
      ...pr,
      [e.target.name]: e.target.value
    }))
  }

  const onBureauChange = e => {
    setDetails(pr => ({
      ...pr,
      Bureau_check: e
    }))
  }

  const addNewOtherDoc = () => {
    setExtraDocs(p => [
      ...p,
      { key: p.length, label: '', isInput: true }
    ])
  }

  const onChangeOtherDocLable = (e, i) => {
    setExtraDocs(prev => prev.map(p => {
      if (p.key === i) {
        return {
          ...p,
          label: e.target.value
        }
      }
      return p
    }))
  }

  return (
    <Modal
      isOpen={isOpen}
      contentCls='w-[450px] relative'
    >
      <div className='dfc max-h-[80vh]'>
        <ModalHeader
          title={`${type} Loan`}
          closeModal={closeModal}
        />

        {
          showImg &&
          <ShowDoc updateImg={updateImg} />
        }

        <div className='scroll-y pr-4 lg:pr-6 pl-px -mr-4 lg:-mr-6'>
          {
            step === 0 &&
            <Step0
              details={details}
              disabled={disabled}
              onChange={onChange}
              setDetails={setDetails}
            />
          }

          {
            step === 1 &&
            <Step1
              type={type}
              details={details}
              disabled={disabled}
              onChange={onChange}
              updateImg={updateImg}
            />
          }

          {
            step === 2 &&
            <Step2
              type={type}
              details={details}
              disabled={disabled}
              onChange={onChange}
              updateImg={updateImg}
            />
          }

          {
            step === 3 &&
            <Step3
              details={details}
              disabled={disabled}
              onChange={onChange}
              onBureauChange={onBureauChange}
            />
          }

          {
            step === 4 &&
            <Step4
              type={type}
              updateImg={updateImg}
            />
          }

          {
            step === 5 &&
            <Step5
              type={type}
              details={details}
              extraDocs={extraDocs}
              updateImg={updateImg}
              addNewOtherDoc={addNewOtherDoc}
              onChangeOtherDocLable={onChangeOtherDocLable}
            />
          }
        </div>

        <Btns
          step={step}
          type={type}
          setStep={setStep}
        />
      </div>
    </Modal>
  )
}

export default Loan