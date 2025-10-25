import SearchBar from '../SearchBar';
import { useState } from 'react';

export default function SearchBarExample() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="p-8">
      <SearchBar
        value={searchValue}
        onChange={setSearchValue}
        placeholder="Search recipes, festivals, or handicrafts..."
      />
      {searchValue && (
        <p className="mt-4 text-sm text-muted-foreground">
          Searching for: {searchValue}
        </p>
      )}
    </div>
  );
}
