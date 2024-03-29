import { Table, Space, Popconfirm, Button } from 'antd';


const columns = [
    {
        title: 'Insurance Type',
        dataIndex: 'Insurance Type',
        key: 'Insurance Type',
    },
    ,
    {
        title: 'Policy Start Date ',
        dataIndex: 'PolicyStartDate',
        key: 'PolicyStartDate',
    },
    {
        title: 'Policy Term',
        dataIndex: 'PolicyTerm',
        key: 'PolicyTerm',
    },
    {
        title: 'Claim Limit',
        dataIndex: 'ClaimLimit',
        key: 'ClaimLimit',
    },

];

const data = [
    {
        "InsuranceID": 1005,
        "EmployeeID": 58001002,
        "Insurance Type": "Personal Accident",
        "PolicyStartDate": "2022-03-31T00:00:00+08:00",
        "PolicyTerm": "12 months",
        "PolicyEndDate": "2023-03-31T00:00:00+08:00",
        "ClaimLimit": 1000.00,
        "RemainingClaimLimit": 400.00
       },
       {
        "InsuranceID": 1006,
        "EmployeeID": 58001002,
        "Insurance Type": "Housing",
        "PolicyStartDate": "2022-03-31T00:00:00+08:00",
        "PolicyTerm": "24 months",
        "PolicyEndDate": "2024-03-31T00:00:00+08:00",
        "ClaimLimit": 50000.00,
        "RemainingClaimLimit": 50000.00
       },
       {
        "InsuranceID": 1007,
        "EmployeeID": 58001002,
        "Insurance Type": "Car",
        "PolicyStartDate": "2022-03-31T00:00:00+08:00",
        "PolicyTerm": "24 months",
        "PolicyEndDate": "2024-03-31T00:00:00+08:00",
        "ClaimLimit": 25000.00,
        "RemainingClaimLimit": 20000.00
       },
       {
        "InsuranceID": 1008,
        "EmployeeID": 58001003,
        "Insurance Type": "Personal Accident",
        "PolicyStartDate": "2022-05-31T00:00:00+08:00",
        "PolicyTerm": "3 months",
        "PolicyEndDate": "2022-08-31T00:00:00+08:00",
        "ClaimLimit": 1000.00,
        "RemainingClaimLimit": 800.00
       },
       {
        "InsuranceID": 1009,
        "EmployeeID": 58001004,
        "Insurance Type": "Personal Accident",
        "PolicyStartDate": "2022-05-31T00:00:00+08:00",
        "PolicyTerm": "12 months",
        "PolicyEndDate": "2023-05-31T00:00:00+08:00",
        "ClaimLimit": 5000,
        "RemainingClaimLimit": 4600
       },
       {
        "InsuranceID": 1010,
        "EmployeeID": 58001004,
        "Insurance Type": "Housing",
        "PolicyStartDate": "2022-05-31T00:00:00+08:00",
        "PolicyTerm": "24 months",
        "PolicyEndDate": "2024-05-31T00:00:00+08:00",
        "ClaimLimit": 50000.00,
        "RemainingClaimLimit": 50000.00
       },
       {
        "InsuranceID": 1011,
        "EmployeeID": 58001003,
        "Insurance Type": "Car",
        "PolicyStartDate": "2022-07-31T00:00:00+08:00",
        "PolicyTerm": "12 months",
        "PolicyEndDate": "2023-07-31T00:00:00+08:00",
        "ClaimLimit": 25000.00,
        "RemainingClaimLimit": 25000.00
       },
       {
        "InsuranceID": 1012,
        "EmployeeID": 58001004,
        "Insurance Type": "Car",
        "PolicyStartDate": "2022-09-30T00:00:00+08:00",
        "PolicyTerm": "24 months",
        "PolicyEndDate": "2024-09-30T00:00:00+08:00",
        "ClaimLimit": 25000.00,
        "RemainingClaimLimit": 25000.00
       },
       {
        "InsuranceID": 1013,
        "EmployeeID": 58001001,
        "Insurance Type": "Housing",
        "PolicyStartDate": "2022-11-30T00:00:00+08:00",
        "PolicyTerm": "24 months",
        "PolicyEndDate": "2024-11-30T00:00:00+08:00",
        "ClaimLimit": 50000.00,
        "RemainingClaimLimit": 50000.00
       },
       {
        "InsuranceID": 1014,
        "EmployeeID": 58001005,
        "Insurance Type": "Travel",
        "PolicyStartDate": "2023-01-31T00:00:00+08:00",
        "PolicyTerm": "1 month",
        "PolicyEndDate": "2023-02-28T00:00:00+08:00",
        "ClaimLimit": 1000.00,
        "RemainingClaimLimit": 1000.00
       },
       {
        "InsuranceID": 1015,
        "EmployeeID": 58001005,
        "Insurance Type": "Housing",
        "PolicyStartDate": "2023-01-31T00:00:00+08:00",
        "PolicyTerm": "24 months",
        "PolicyEndDate": "2025-01-31T00:00:00+08:00",
        "ClaimLimit": 50000.00,
        "RemainingClaimLimit": 50000.00
       },
       {
        "InsuranceID": 1016,
        "EmployeeID": 58001001,
        "Insurance Type": "Travel",
        "PolicyStartDate": "2023-01-31T00:00:00+08:00",
        "PolicyTerm": "1 month",
        "PolicyEndDate": "2023-02-28T00:00:00+08:00",
        "ClaimLimit": 1000.00,
        "RemainingClaimLimit": 900.00
       }
];

export const PolicyTable = () => {
    return (
        <Table columns={columns} dataSource={data} style={{margin: '0 auto',
        padding: '40px',}}/>
    );
};

// export default PolicyTable;