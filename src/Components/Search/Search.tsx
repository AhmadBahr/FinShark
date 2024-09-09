import React, { ChangeEvent, SyntheticEvent, useState } from 'react';

type Props = {
    onSearchSubmit: (e: SyntheticEvent) => void;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
    search: string | undefined;
}

const Search: React.FC<Props> = ({ handleSearchChange, onSearchSubmit, search }): JSX.Element => {
    return (
        <>
            <form onSubmit={onSearchSubmit}>
                <input value={search} onChange={handleSearchChange} />
            </form>
        </>
    );
};

export default Search;
