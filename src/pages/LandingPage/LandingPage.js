import React, { useState, useEffect } from "react";
import axios from "axios";

const LandingPage = () => {
  const [ideas, setIdeas] = useState([]);
  const [search, setSearch] = useState("");
  const baseUrl = `/ideas/?search=${search}`;

  useEffect(() => {
    getIdeas();
  }, [search]);

  const getIdeas = () => {
    axios.get(baseUrl).then((response) => setIdeas(response.data.results));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getIdeas();
  };

  return (
    <div className="landingPage">
      <form
        className="searchForm"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={search}
          onChange={handleSearch}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <div className="searchResults">
        {ideas.map((idea) => {
          console.log(idea);
          return (
            <div key={idea.id}>
              <h2>{idea.author}</h2>
              <p>{idea.quote}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
