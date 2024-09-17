import React from 'react';

type Config = {
    label: string;
    render: (company: Company) => React.ReactNode;
};

type Props = {
    config: Config[];
    data: Company[];
};

type Company = {
    name: string;
    acceptedDate: string;
    industry: string;
    revenue: number;
    cik: string;
};

const Table: React.FC<Props> = ({ config, data }) => {
    const renderedRows = data.map((company) => (
        <tr key={company.cik} className="text-gray-700">
            {config.map((column, index) => (
                <td key={index} className="p-3 border-b">
                    {column.render(company)}
                </td>
            ))}
        </tr>
    ));

    const renderedHeaders = config.map((column) => (
        <th
            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
            key={column.label}
        >
            {column.label}
        </th>
    ));

    return (
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
            <table className="min-w-full divide-y divide-gray-200 m-5">
                <thead className="bg-gray-50">
                    <tr>{renderedHeaders}</tr>
                </thead>
                <tbody>{renderedRows}</tbody>
            </table>
        </div>
    );
};

const data: Company[] = [
    {
        name: "Tech Corp",
        acceptedDate: "2021",
        industry: "Technology",
        revenue: 5000000,
        cik: "0000320193",
    },
    {
        name: "Health Innovations",
        acceptedDate: "2019",
        industry: "Healthcare",
        revenue: 3000000,
        cik: "0001067983",
    },
    {
        name: "Eco Solutions",
        acceptedDate: "2020",
        industry: "Environment",
        revenue: 1500000,
        cik: "0001707903",
    },
];

const config: Config[] = [
    { label: "Company Name", render: (company: Company) => company.name },
    { label: "Accepted Date", render: (company: Company) => company.acceptedDate },
    { label: "Industry", render: (company: Company) => company.industry },
    { label: "Revenue", render: (company: Company) => `$${company.revenue.toLocaleString()}` },
    { label: "CIK", render: (company: Company) => company.cik },
];

const App = () => {
    return <Table config={config} data={data} />;
};

export default App;
