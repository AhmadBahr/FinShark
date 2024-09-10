import React, { ChangeEvent, SyntheticEvent } from 'react';

type Props = {
    onSearchSubmit: (e: SyntheticEvent) => void;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
    search: string | undefined;
}

const Search: React.FC<Props> = ({ handleSearchChange, onSearchSubmit, search }) => {
    return (
        <form onSubmit={onSearchSubmit} className='flex'>
        <input 
            type='text' 
            value={search || ''} 
            onChange={handleSearchChange} 
            placeholder='Search...' 
            className='p-2 border border-green-500 rounded-l-md bg-white text-gray-800'
            aria-label='Search'
            id='search-input'
        />
        <button 
            type='submit' 
            className='p-2 bg-green-500 text-white rounded-r-md hover:bg-green-600'
            aria-label='Submit search'
        >
            Search
        </button>
    </form>
);
};

export default Search;
