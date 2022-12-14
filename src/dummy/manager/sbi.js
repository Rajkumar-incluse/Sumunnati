import getRandom from '../../helper/getRandom';

const data = [
  {
    id: 'id-1',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '01-05-2022 10:30 AM',
    end: '01-05-2022 8:00 PM',
    status: 'Active',
    appOrRe: 'Accepted',
    location: 'Chennai',
    email: "tylkj.gmail.com",
    phone: 123456789,
    name: 'Raj kumar',
    fpo: 'Samrthi FPO',
    amount: 98765,
    due: 3778,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-2',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '02-05-2022 9:30 AM',
    end: '02-05-2022 8:30 PM',
    status: 'Active',
    appOrRe: 'Accepted',
    location: 'Chennai',
    email: "lkjhgf.gmail.com",
    phone: 9876544876,
    name: 'Kesavan',
    fpo: 'Anughraha FPO',
    amount: 79765,
    due: 9879,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-3',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '02-05-2022 12:30 AM',
    end: '03-05-2022 8:00 PM',
    status: 'De-active',
    appOrRe: 'Pending',
    location: 'Telungana',
    email: "iuytrew.gmail.com",
    phone: 567987654,
    name: 'Naveen Teja',
    fpo: 'Anughraha FPO',
    amount: 7345,
    due: 987,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-4',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '03-05-2022 10:30 AM',
    end: '03-05-2022 8:00 PM',
    status: 'Active',
    appOrRe: 'Accepted',
    location: 'Delhi',
    email: "wertyhgv.gmail.com",
    phone: 239876543,
    name: 'Rahul',
    fpo: 'Samrthi FPO',
    amount: 345679876,
    due: 76543,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-5',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '04-05-2022 11:30 AM',
    end: '04-05-2022 5:00 PM',
    status: 'De-active',
    appOrRe: 'Rejected',
    location: 'Chennai',
    email: "exarmple3.gmail.com",
    phone: 65456789,
    name: 'Ravichandran',
    fpo: 'Anughraha FPO',
    amount: 98765,
    due: 5687,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-6',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '05-05-2022 8:15 AM',
    end: '05-05-2022 8:40 PM',
    status: 'Active',
    appOrRe: 'Pending',
    location: 'Mumbai',
    email: "erfgbhg.gmail.com",
    phone: 4512345698,
    name: 'Ashok Raja',
    fpo: 'ABCD FPO',
    amount: 709651,
    due: 7187,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-7',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '06-05-2022 10:30 AM',
    end: '07-05-2022 8:00 PM',
    status: 'De-active',
    appOrRe: 'Pending',
    location: 'Bihar',
    email: "erjbv.gmail.com",
    phone: 9876567009,
    name: 'Yuvan shankar',
    fpo: 'Anughraha FPO',
    amount: 7456765,
    due: 8767,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-8',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '08-05-2022 5:30 AM',
    end: '08-05-2022 7:00 PM',
    status: 'Active',
    appOrRe: 'Accepted',
    location: 'Chennai',
    email: "qwertyuio.gmail.com",
    phone: 98765456445,
    name: 'Perarasan',
    fpo: 'ABCD FPO',
    amount: 78799,
    due: 7000,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-9',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '09-05-2022 2:00 AM',
    end: '09-05-2022 3:30 PM',
    status: 'Active',
    appOrRe: 'Pending',
    location: 'Theni',
    email: "wdxcvhjb.gmail.com",
    phone: 4400992876,
    name: 'Vikram',
    fpo: 'Samrthi FPO',
    amount: 765435,
    due: 97687,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-10',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '10-05-2022 10:30 AM',
    end: '10-05-2022 8:00 PM',
    status: 'Active',
    appOrRe: 'Accepted',
    location: 'Chennai',
    email: "example.gmail.com",
    phone: 123456789,
    name: 'Deva',
    fpo: 'Anughraha FPO',
    amount: 976579,
    due: 83257,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-11',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '01-05-2022 10:30 AM',
    end: '01-05-2022 8:00 PM',
    status: 'Active',
    appOrRe: 'Accepted',
    location: 'Chennai',
    email: "tylkj.gmail.com",
    phone: 123456789,
    name: 'Raj kumar',
    fpo: 'ABCD FPO',
    amount: 88900,
    due: 8742,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-12',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '02-05-2022 9:30 AM',
    end: '02-05-2022 8:30 PM',
    status: 'Active',
    appOrRe: 'Pending',
    location: 'Chennai',
    email: "lkjhgf.gmail.com",
    phone: 9876544876,
    name: 'Kesavan',
    fpo: 'Samrthi FPO',
    amount: 12366090,
    due: 6877,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-13',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '02-05-2022 12:30 AM',
    end: '03-05-2022 8:00 PM',
    status: 'De-active',
    appOrRe: 'Pending',
    location: 'Telungana',
    email: "iuytrew.gmail.com",
    phone: 567987654,
    name: 'Naveen Teja',
    fpo: 'Anughraha FPO',
    amount: 76500,
    due: 9870,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-14',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '03-05-2022 10:30 AM',
    end: '03-05-2022 8:00 PM',
    status: 'Active',
    appOrRe: 'Accepted',
    location: 'Delhi',
    email: "wertyhgv.gmail.com",
    phone: 239876543,
    name: 'Rahul',
    fpo: 'Samrthi FPO',
    amount: 79879,
    due: 9778,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-15',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '04-05-2022 11:30 AM',
    end: '04-05-2022 5:00 PM',
    status: 'De-active',
    appOrRe: 'Pending',
    location: 'Chennai',
    email: "exarmple3.gmail.com",
    phone: 65456789,
    name: 'Ravichandran',
    fpo: 'ABCD FPO',
    amount: 79876,
    due: 7880,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-16',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '05-05-2022 8:15 AM',
    end: '05-05-2022 8:40 PM',
    status: 'Active',
    appOrRe: 'Accepted',
    location: 'Mumbai',
    email: "erfgbhg.gmail.com",
    phone: 4512345698,
    name: 'Ashok Raja',
    fpo: 'Samrthi FPO',
    amount: 9900800,
    due: 90000,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-17',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '06-05-2022 10:30 AM',
    end: '07-05-2022 8:00 PM',
    status: 'De-active',
    appOrRe: 'Rejected',
    location: 'Bihar',
    email: "erjbv.gmail.com",
    phone: 9876567009,
    name: 'Yuvan shankar',
    fpo: 'ABCD FPO',
    amount: 765456,
    due: 7650,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-18',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '08-05-2022 5:30 AM',
    end: '08-05-2022 7:00 PM',
    status: 'Active',
    appOrRe: 'Pending',
    location: 'Chennai',
    email: "qwertyuio.gmail.com",
    phone: 98765456445,
    name: 'Perarasan',
    fpo: 'Samrthi FPO',
    amount: 88999770,
    due: 9700,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-19',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '09-05-2022 2:00 AM',
    end: '09-05-2022 3:30 PM',
    status: 'Active',
    appOrRe: 'Accepted',
    location: 'Theni',
    email: "wdxcvhjb.gmail.com",
    phone: 4400992876,
    name: 'Vikram',
    fpo: 'Anughraha FPO',
    amount: 8700980,
    due: 9000,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-20',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '10-05-2022 10:30 AM',
    end: '10-05-2022 8:00 PM',
    status: 'Active',
    appOrRe: 'Accepted',
    location: 'Chennai',
    email: "example.gmail.com",
    phone: 123456789,
    name: 'Deva',
    fpo: 'ABCD FPO',
    amount: 90865,
    due: 9000,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-21',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '01-05-2022 10:30 AM',
    end: '01-05-2022 8:00 PM',
    status: 'Active',
    appOrRe: 'Accepted',
    location: 'Chennai',
    email: "tylkj.gmail.com",
    phone: 123456789,
    name: 'Raj kumar',
    fpo: 'Samrthi FPO',
    amount: 98765,
    due: 3778,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-22',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '02-05-2022 9:30 AM',
    end: '02-05-2022 8:30 PM',
    status: 'Active',
    appOrRe: 'Accepted',
    location: 'Chennai',
    email: "lkjhgf.gmail.com",
    phone: 9876544876,
    name: 'Kesavan',
    fpo: 'Anughraha FPO',
    amount: 79765,
    due: 9879,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-23',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '02-05-2022 12:30 AM',
    end: '03-05-2022 8:00 PM',
    status: 'De-active',
    appOrRe: 'Pending',
    location: 'Telungana',
    email: "iuytrew.gmail.com",
    phone: 567987654,
    name: 'Naveen Teja',
    fpo: 'Anughraha FPO',
    amount: 7345,
    due: 987,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-24',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '03-05-2022 10:30 AM',
    end: '03-05-2022 8:00 PM',
    status: 'Active',
    appOrRe: 'Accepted',
    location: 'Delhi',
    email: "wertyhgv.gmail.com",
    phone: 239876543,
    name: 'Rahul',
    fpo: 'Samrthi FPO',
    amount: 345679876,
    due: 76543,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-25',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '04-05-2022 11:30 AM',
    end: '04-05-2022 5:00 PM',
    status: 'De-active',
    appOrRe: 'Rejected',
    location: 'Chennai',
    email: "exarmple3.gmail.com",
    phone: 65456789,
    name: 'Ravichandran',
    fpo: 'Anughraha FPO',
    amount: 98765,
    due: 5687,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-26',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '05-05-2022 8:15 AM',
    end: '05-05-2022 8:40 PM',
    status: 'Active',
    appOrRe: 'Pending',
    location: 'Mumbai',
    email: "erfgbhg.gmail.com",
    phone: 4512345698,
    name: 'Ashok Raja',
    fpo: 'ABCD FPO',
    amount: 709651,
    due: 7187,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-27',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '06-05-2022 10:30 AM',
    end: '07-05-2022 8:00 PM',
    status: 'De-active',
    appOrRe: 'Pending',
    location: 'Bihar',
    email: "erjbv.gmail.com",
    phone: 9876567009,
    name: 'Yuvan shankar',
    fpo: 'Anughraha FPO',
    amount: 7456765,
    due: 8767,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-28',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '08-05-2022 5:30 AM',
    end: '08-05-2022 7:00 PM',
    status: 'Active',
    appOrRe: 'Accepted',
    location: 'Chennai',
    email: "qwertyuio.gmail.com",
    phone: 98765456445,
    name: 'Perarasan',
    fpo: 'ABCD FPO',
    amount: 78799,
    due: 7000,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-29',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '09-05-2022 2:00 AM',
    end: '09-05-2022 3:30 PM',
    status: 'Active',
    appOrRe: 'Pending',
    location: 'Theni',
    email: "wdxcvhjb.gmail.com",
    phone: 4400992876,
    name: 'Vikram',
    fpo: 'Samrthi FPO',
    amount: 765435,
    due: 97687,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-30',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '10-05-2022 10:30 AM',
    end: '10-05-2022 8:00 PM',
    status: 'Active',
    appOrRe: 'Accepted',
    location: 'Chennai',
    email: "example.gmail.com",
    phone: 123456789,
    name: 'Deva',
    fpo: 'Anughraha FPO',
    amount: 976579,
    due: 83257,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-31',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '01-05-2022 10:30 AM',
    end: '01-05-2022 8:00 PM',
    status: 'Active',
    appOrRe: 'Accepted',
    location: 'Chennai',
    email: "tylkj.gmail.com",
    phone: 123456789,
    name: 'Raj kumar',
    fpo: 'ABCD FPO',
    amount: 88900,
    due: 8742,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-32',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '02-05-2022 9:30 AM',
    end: '02-05-2022 8:30 PM',
    status: 'Active',
    appOrRe: 'Pending',
    location: 'Chennai',
    email: "lkjhgf.gmail.com",
    phone: 9876544876,
    name: 'Kesavan',
    fpo: 'Samrthi FPO',
    amount: 12366090,
    due: 6877,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-33',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '02-05-2022 12:30 AM',
    end: '03-05-2022 8:00 PM',
    status: 'De-active',
    appOrRe: 'Pending',
    location: 'Telungana',
    email: "iuytrew.gmail.com",
    phone: 567987654,
    name: 'Naveen Teja',
    fpo: 'Anughraha FPO',
    amount: 76500,
    due: 9870,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-34',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '03-05-2022 10:30 AM',
    end: '03-05-2022 8:00 PM',
    status: 'Active',
    appOrRe: 'Accepted',
    location: 'Delhi',
    email: "wertyhgv.gmail.com",
    phone: 239876543,
    name: 'Rahul',
    fpo: 'Samrthi FPO',
    amount: 79879,
    due: 9778,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
  {
    id: 'id-35',
    loanId: `2022-${getRandom(10, 1000)}-07`,
    start: '04-05-2022 11:30 AM',
    end: '04-05-2022 5:00 PM',
    status: 'De-active',
    appOrRe: 'Pending',
    location: 'Chennai',
    email: "exarmple3.gmail.com",
    phone: 65456789,
    name: 'Ravichandran',
    fpo: 'ABCD FPO',
    amount: 79876,
    due: 7880,
    next: getRandom(500, 1000),
    sbiInt: getRandom(8, 15)
  },
]

export default data