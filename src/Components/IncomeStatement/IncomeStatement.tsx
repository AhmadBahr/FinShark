import React from 'react';

type IncomeStatementData = {
    year: number;
    revenue: number;
    costOfGoodsSold: number;
    grossProfit: number;
    operatingExpenses: number;
    netIncome: number;
};

type Props = {
    data: IncomeStatementData[];
};

const IncomeStatement: React.FC<Props> = ({ data = [] }) => {
    return (
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
            <h2 className="text-xl font-bold mb-4">Income Statement</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 text-left">Year</th>
                        <th className="py-2 px-4 text-left">Revenue</th>
                        <th className="py-2 px-4 text-left">Cost of Goods Sold</th>
                        <th className="py-2 px-4 text-left">Gross Profit</th>
                        <th className="py-2 px-4 text-left">Operating Expenses</th>
                        <th className="py-2 px-4 text-left">Net Income</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 border">{item.year}</td>
                            <td className="py-2 px-4 border">${item.revenue.toLocaleString()}</td>
                            <td className="py-2 px-4 border">${item.costOfGoodsSold.toLocaleString()}</td>
                            <td className="py-2 px-4 border">${item.grossProfit.toLocaleString()}</td>
                            <td className="py-2 px-4 border">${item.operatingExpenses.toLocaleString()}</td>
                            <td className="py-2 px-4 border">${item.netIncome.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


const mockIncomeStatementData: IncomeStatementData[] = [
    {
        year: 2021,
        revenue: 5000000,
        costOfGoodsSold: 2000000,
        grossProfit: 3000000,
        operatingExpenses: 1000000,
        netIncome: 2000000,
    },
    {
        year: 2020,
        revenue: 4500000,
        costOfGoodsSold: 1800000,
        grossProfit: 2700000,
        operatingExpenses: 900000,
        netIncome: 1800000,
    },
    {
        year: 2019,
        revenue: 4000000,
        costOfGoodsSold: 1600000,
        grossProfit: 2400000,
        operatingExpenses: 800000,
        netIncome: 1600000,
    },
];

const App = () => {
    return <IncomeStatement data={mockIncomeStatementData} />;
};

export default App;
