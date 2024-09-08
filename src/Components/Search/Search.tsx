import React, { SyntheticEvent, useState } from 'react';

type Props = {};

const Search: React.FC<Props> = (props: Props): JSX.Element => {
    const [search, setSearch] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const onClick = (e: SyntheticEvent) => {
        console.log('Search clicked:', search); 
    };

    return (
        <div>
            <input value={search} onChange={handleChange} placeholder="Search..." />
            <button onClick={onClick}>Search</button>
        </div>
    );
};

export default Search;
