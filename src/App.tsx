import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './Components/Portfolio/AddPortfolio/ListPortfolio/ListPortfolio';


function App() {
  const [search, setSearch] = useState<string>("");
  const [portfoliovalues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const index = portfoliovalues.indexOf(e.target[0].value);
    if (index > -1) {
      portfoliovalues.splice(index, 1);
    }
    const updatedPortofolio = [...portfoliovalues, e.target[0].value];
    setPortfolioValues(updatedPortofolio);
  }

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === 'string') {
      setServerError(result);
      setSearchResult([]);
    } else if (Array.isArray(result)) {
      setSearchResult(result);
      setServerError("");
    }
  };

  return (
    <div className="App">
      <Search
        onSearchSubmit={onSearchSubmit}
        handleSearchChange={handleSearchChange} search={search}
      />
      <ListPortfolio portfolioValues = {portfoliovalues}/>
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />
      {serverError && <div>Unable to connect to API</div>}
    </div>
  );
}

export default App;
