import React, { ChangeEvent, SyntheticEvent, useState } from 'react';

type Props = {
    onSearch: (search: string) => void;
    onClick: (e: SyntheticEvent) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    search: string;
}

const Search: React.FC<Props> = ({ handleChange, onClick, search }): JSX.Element => {
    return (
        <div>
            <input value={search} onChange={handleChange} placeholder="Search..." />
            <button onClick={onClick}>Search</button>
        </div>
    );
};

export default Search;
