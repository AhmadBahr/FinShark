import { SyntheticEvent } from 'react';
import { CompanySearch } from '../../company';
import AddPorfolio from '../Add Portflio/AddPorfolio.tsx';
import './Card.css'
import React from 'react';

interface Props {
    id: string;
    searchResult: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent) => void
}

const Card: React.FC<Props> = ({ id, searchResult, onPortfolioCreate }: Props): JSX.Element => {
    return <div key={id} id={id} className='card'>
        <img
            alt='comapny logo'
        />
        <div className="details">
            <h2>{searchResult.name} ({searchResult.symbol})</h2>
            <p>${searchResult.currency}</p>
        </div>
        <p className="info">
            {searchResult.exchangeShortName} - {searchResult.stockExchange}
        </p>
        <AddPorfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} />
    </div>
}

export default Card