import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log('Search term:', e.target.value);
  };

  const onClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);

    if (typeof result === 'string') {
      setServerError(result);
      setSearchResult([]);
    } else if (Array.isArray(result)) {
      setSearchResult(result);
      setServerError("");
    }

    console.log('Search results:', searchResult);
  };

  return (
    <div className="App">
      <CardList />
      <Search
        onClick={onClick}
        handleChange={handleChange}
        search={search} onSearch={function (search: string): void {
          throw new Error('Function not implemented.');
        }} />
      {serverError && <p style={{ color: 'red' }}>{serverError}</p>}
    </div>
  );
}

export default App;
