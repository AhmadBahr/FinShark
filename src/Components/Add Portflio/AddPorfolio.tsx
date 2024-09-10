import React, { SyntheticEvent } from 'react';

type Props = {
    symbol: string;
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const AddPortfolio: React.FC<Props> = ({ onPortfolioCreate, symbol }) => {
    return (
        <form onSubmit={onPortfolioCreate} className="flex items-center">
            <input type='hidden' value={symbol} />
            <button 
                type="submit" 
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                aria-label={`Add ${symbol} to portfolio`}
            >
                Add
            </button>
        </form>
    );
}

export default AddPortfolio;
