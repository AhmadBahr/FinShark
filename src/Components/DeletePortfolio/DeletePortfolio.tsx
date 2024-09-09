import React, { SyntheticEvent } from 'react'

type Props = {
    onPortolioDelete: (e: SyntheticEvent) => void;
    portfolioValue: string
}

const DeletePortfolio = ({ onPortolioDelete, portfolioValue }: Props) => {
    return (
        <form onSubmit={onPortolioDelete}>
            <input hidden={true} value={portfolioValue} />
            <button>X</button>
        </form>
    )
}

export default DeletePortfolio