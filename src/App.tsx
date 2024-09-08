import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';

function App() {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log('Search term:', e.target.value);
  };

  const onClick = (e: SyntheticEvent) => {
    console.log('Button clicked, search term:', search);
  };

  return (
    <div className="App">
      <CardList />
      <Search
        onClick={onClick}
        handleChange={handleChange}
        search={search} onSearch={function (search: string): void {
          throw new Error('Function not implemented.');
        }}
      />
    </div>
  );
}

export default App;
