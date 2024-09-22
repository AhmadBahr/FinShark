import { SyntheticEvent } from 'react';
import CardPortfolio from '../../../CardPortfolio/CardPortfolio';
import React from 'react';

interface Props {
    portfolioValues: string[];
    onPortfolioDelete: (e: SyntheticEvent) => void
}

const ListPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">My Portfolio</h3>
            {portfolioValues.length === 0 ? (
                <p className="text-gray-600">Your portfolio is empty.</p>
            ) : (
                <ul className="list-disc list-inside space-y-2">
                    {portfolioValues.map((portfolioValue) => (
                        <li key={portfolioValue}>
                            <CardPortfolio
                                portfolioValue={portfolioValue}
                                onPortfolioDelete={onPortfolioDelete}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ListPortfolio;