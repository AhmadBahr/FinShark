import React from 'react';
import { TestDataCompany } from '../Table/testData.tsx';

const data = TestDataCompany[0];

type Company = typeof data;

type Config = {
    label: string;
    render: (company: Company) => React.ReactNode;
    subTitle?: string;
};

type Props = {
    config: Config[];
    data: Company;
};

const RatioList: React.FC<Props> = ({ config, data }) => {
    const renderedCells = config.map((row: Config, index: number) => {
        return (
            <li key={index} className="py-6 sm:py-6">
                <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                            {row.label}
                        </p>
                        {row.subTitle && (
                            <p className="text-sm text-gray-500 truncate">
                                {row.subTitle}
                            </p>
                        )}
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        {row.render(data)}
                    </div>
                </div>
            </li>
        );
    });

    return (
        <div className="bg-white shadow rounded-lg ml-4 mt-4 mb-4 p-4 sm:p-6 w-full">
            <ul className="divide-y divide-gray-200">{renderedCells}</ul>
        </div>
    );
};

const config: Config[] = [
    {
        label: "Company Name",
        render: (company: Company) => company.companyName,
        subTitle: "This is the company's name",
    },
];

const App = () => {
    return <RatioList config={config} data={data} />;
};

export default App;
