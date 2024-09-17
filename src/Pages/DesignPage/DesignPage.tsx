import React from 'react'
import Table from '../../Components/Table/Table.tsx'
import RatioList from '../../Components/RatioList/RatioList.tsx'

type Props = {}

const DesignPage = (props: Props) => {
    return (
        <>
            <h1>FinShark Design Page</h1>
            <RatioList/>
            <Table />
            <h2>This is FinShark's design page. This is where we will house various
                design aspects  of the app
            </h2>
        </>
    )
}

export default DesignPage