import React, { SyntheticEvent } from 'react'
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio.tsx';

interface Props {
    portfolioValue: string;
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio: React.FC<Props> = ({ portfolioValue, onPortfolioDelete }) => {
    return (
        <div className='p-4 border rounded-lg shadow-md'>
            <h4 className='text-xl font-semibold mb-2'>{portfolioValue}</h4>
            <DeletePortfolio 
                onPortfolioDelete={onPortfolioDelete} 
                portfolioValue={portfolioValue} 
            />
        </div>
    );
}

export default CardPortfolio;