import React, { SyntheticEvent } from 'react';

type Props = {
    onPortfolioDelete: (e: SyntheticEvent) => void;
    portfolioValue: string;
}

const DeletePortfolio: React.FC<Props> = ({ onPortfolioDelete, portfolioValue }) => {
    return (
        <form onSubmit={onPortfolioDelete}>
            <input type='hidden' value={portfolioValue} />
            <button 
                type='submit' 
                className='p-2 bg-red-500 text-white rounded hover:bg-red-600'
                aria-label={`Delete ${portfolioValue}`}
            >
                X
            </button>
        </form>
    );
}

export default DeletePortfolio;
