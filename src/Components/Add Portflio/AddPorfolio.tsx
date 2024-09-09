import React, { SyntheticEvent } from 'react'

type Props = {
    symbol: string
    onPortfolioCreate: (e: SyntheticEvent) => void
}

const AddPorfolio = ({ onPortfolioCreate, symbol }: Props) => {
    return <form onSubmit={onPortfolioCreate}>
        <input readOnly={true} hidden={true} value={symbol}/>
        <button type="submit">Add</button>
    </form>
}

export default AddPorfolio