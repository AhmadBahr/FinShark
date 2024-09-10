import { SyntheticEvent } from 'react';
import { CompanySearch } from '../../company';
import AddPortfolio from '../Add Portfolio/AddPortfolio.tsx';
import { Link } from 'react-router-dom';
import React from 'react';

interface Props {
    id: string;
    searchResult: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ id, searchResult, onPortfolioCreate }: Props): JSX.Element => {
    return (
        <div
            className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
            key={id}
            id={id}
        >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full">
                <div className="flex flex-col items-center md:items-start w-full md:w-auto">
                    <Link to={`/company/${searchResult.symbol}`} className="font-bold text-center md:text-left text-veryDarkViolet">
                        {searchResult.name} ({searchResult.symbol})
                    </Link>
                    <p className="text-veryDarkBlue">{searchResult.currency}</p>
                    <p className="font-bold text-veryDarkBlue">
                        {searchResult.exchangeShortName} - {searchResult.stockExchange}
                    </p>
                </div>
                <div className="mt-4 md:mt-0">
                    <AddPortfolio
                        onPortfolioCreate={onPortfolioCreate}
                        symbol={searchResult.symbol}
                    />
                </div>
            </div>
        </div>
    );
}

export default Card;