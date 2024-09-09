import CardPortfolio from '../../../CardPortfolio/CardPortfolio';

interface Props {
    portfolioValues: string[];
}

const ListPortfolio = ({ portfolioValues }: Props) => {
    return (
        <>
            <h3>My Portfiolio</h3>
            <ul>
                {portfolioValues &&
                    portfolioValues.map((portfolioValues) => {
                        return <CardPortfolio portfolioValue={portfolioValues} />
                    })
                }
            </ul>
        </>
    )
}

export default ListPortfolio