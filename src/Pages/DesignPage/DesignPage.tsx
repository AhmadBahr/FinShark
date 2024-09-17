import React from 'react'
import Table from '../../Components/Table/Table.tsx'
import RatioList from '../../Components/RatioList/RatioList.tsx'
import { CompanyKeyMetrics } from '../../company'
import { testIncomeStatementData } from '../../Components/Table/testData.tsx'

type Props = {}

const tableConfig = [
    {
        label: "Market Cap",
        render: (company: CompanyKeyMetrics) => (company.marketCapTTM),
        subTitle: "Total value of all a company's shares of stock",
    },
]

const DesignPage = (props: Props) => {
    return (
        <>
            <h1>FinShark Design Page</h1>
            <RatioList data={testIncomeStatementData} config={tableConfig} />
            <Table />
            <h2>This is FinShark's design page. This is where we will house various
                design aspects  of the app
            </h2>
        </>
    )
}

export default DesignPage