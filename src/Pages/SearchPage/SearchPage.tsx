import React, { useState, ChangeEvent, SyntheticEvent } from 'react';
import Navbar from '../../Components/Navbar/Navbar.tsx';
import Hero from '../../Components/Hero/Hero.tsx';
import Search from '../../Components/Search/Search.tsx';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio/ListPortfolio.tsx';
import CardList from '../../Components/CardList/CardList.tsx';
import { CompanySearch } from '../../company.tsx';
import { searchCompanies } from '../../api.tsx';

const SearchPage: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string>("");

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const onPortfolioCreate = (e: SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const value = (target.elements[0] as HTMLInputElement).value;
        
        if (value && !portfolioValues.includes(value)) {
            setPortfolioValues([...portfolioValues, value]);
        }
    };

    const onPortfolioDelete = (e: SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const value = (target.elements[0] as HTMLInputElement).value;
        
        setPortfolioValues(portfolioValues.filter(v => v !== value));
    };

    const onSearchSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            const result = await searchCompanies(search);
            if (typeof result === 'string') {
                setServerError(result);
                setSearchResult([]);
            } else if (Array.isArray(result)) {
                setSearchResult(result);
                setServerError("");
            }
        } catch (error) {
            setServerError('An unexpected error occurred');
            setSearchResult([]);
        }
    };

    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Search
                onSearchSubmit={onSearchSubmit}
                handleSearchChange={handleSearchChange}
                search={search}
            />
            <ListPortfolio 
                portfolioValues={portfolioValues} 
                onPortfolioDelete={onPortfolioDelete} 
            />
            <CardList 
                searchResults={searchResult} 
                onPortfolioCreate={onPortfolioCreate} 
            />
            {serverError && <div className="error">{serverError}</div>}
        </div>
    );
};

export default SearchPage;
