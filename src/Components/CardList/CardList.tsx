import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";
import Card from "../Card/Card.tsx";
import { SyntheticEvent } from "react";
import React from "react";

interface Props {
    searchResults: CompanySearch[];
    onPortfolioCreate: (e: SyntheticEvent) => void
}

const CardList: React.FC<Props> = ({ searchResults, onPortfolioCreate }): JSX.Element => {
    return (
        <>
            {searchResults.length > 0 ? (
                searchResults.map((result) => (
                    <Card
                        id={result.symbol}
                        key={uuidv4()}
                        searchResult={result}
                        onPortfolioCreate={onPortfolioCreate} />
                ))
            ) : (
                <h1>No results</h1>
            )}
        </>
    );
};

export default CardList;
