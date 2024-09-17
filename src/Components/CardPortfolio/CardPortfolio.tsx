import React, { SyntheticEvent } from 'react'
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio.tsx';
import { Link } from 'react-router-dom';

interface Props {
    portfolioValue: string;
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio: React.FC<Props> = ({ portfolioValue, onPortfolioDelete }) => {
    return (
        <div className='p-4 border rounded-lg shadow-md'>
            <Link to={`/company/${portfolioValue}/comapny-profile`} className='text-xl font-semibold mb-2'>{portfolioValue}</Link>
            <DeletePortfolio
                onPortfolioDelete={onPortfolioDelete}
                portfolioValue={portfolioValue}
            />
        </div>
    );
}

export default CardPortfolio;