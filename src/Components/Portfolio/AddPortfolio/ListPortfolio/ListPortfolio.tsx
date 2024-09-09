import { SyntheticEvent } from 'react';
import CardPortfolio from '../../../CardPortfolio/CardPortfolio.tsx';
import React from 'react';

interface Props {
    portfolioValues: string[];
    onPortfolioDelete: (e: SyntheticEvent) => void
}

const ListPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
    return (
        <>
            <h3>My Portfiolio</h3>
            <ul>
                {portfolioValues &&
                    portfolioValues.map((portfolioValue) => {
                        return <CardPortfolio portfolioValue={portfolioValue} onPortfolioDelete={onPortfolioDelete} />
                    })
                }
            </ul>
        </>
    )
}

export default ListPortfolio