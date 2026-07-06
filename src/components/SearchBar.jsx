import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/data.js";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const matches = data.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(matches);
  };

  const handleSelect = (item) => {
    setQuery(item.title);
    setSuggestions([]);
    navigate(`/cardDetail/${item.id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const match = data.find(
      (item) => item.title.toLowerCase() === query.toLowerCase()
    );

    if (match) {
      navigate(`/cardDetail/${match.id}`);
    }
  };

  return (
    <div className="searchbar-wrapper">
      <form onSubmit={handleSubmit} className="searchbar-container">
        <button type="submit">
          <img src="/src/assets/search-icon.png" alt="search" />
        </button>

        <input
          type="text"
          placeholder="Zoeken..."
          value={query}
          onChange={handleChange}
        />
      </form>

      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((item) => (
            <li key={item.id} onClick={() => handleSelect(item)}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;