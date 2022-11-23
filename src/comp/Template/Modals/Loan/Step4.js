import { useState } from 'react';
import InputFileWithLabel from '../../../Common/InputFileWithLabel';

function Step4({ type, updateImg }) {
  const [options] = useState([
    {
      head: "Company KYC",
      list: ["MOA", "AOA", "Registration certificate", "PAN card", "Address proof", "GST certificate"]
    },
    {
      head: "Statutory license",
      list: ["Seeds", "Pesticide", "Fertilizer", "FSSAI", "APEDA", "MPEDA", "EXIM", "AGMARK", "APMC", "Organic certificate"]
    },
    {
      head: "CEO & management KYC",
      list: ["PAN card", "Aadhar card"]
    },
    {
      head: "Financials",
      list: ["Audited financials", "Provisional financials", "Projections and business plan", "Bank Details(Passbook/Cheque snapshot)"]
    },
    {
      head: "Credit statement",
      list: ["Bank statement", "GST returns", "IT returns", "Debtors ageing", "Creditor ageing", "Sales report", "Purchase report", "Top customers", "Top suppliers", "Borrowing profile", "Sanction letters", "MSME Certificate", "CIBIL/Bureu Check", "Perfios Analysis"]
    }
  ])

  return (
    <>
      {
        options.map(doc => (
          <div key={doc.head} className='mb-8'>
            <h1 className='mb-2 text-lg font-medium'>{doc.head}</h1>
            {
              doc.list.map(li => (
                <InputFileWithLabel
                  key={li}
                  val={type}
                  lable={li}
                  updateImg={updateImg}
                />
              ))
            }
          </div>
        ))
      }
    </>
  )
}

export default Step4