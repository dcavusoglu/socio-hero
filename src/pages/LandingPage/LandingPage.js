import React, { useState, useEffect } from 'react'
import axios from 'axios';

const LandingPage = () => {

  const API_KEY = "6cGZBPSiQzyGuANS9IVyDlpO7PVpViTl";

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const baseUrl = `https://api.nytimes.com/svc/books/v3/reviews.json?title=${search}&api-key=${API_KEY}`


  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    axios.get(baseUrl)
      .then(response =>
      setBooks(response.data.results));
  }

  const handleSearch = e => {
    setSearch(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    getBooks();
  }

  return (
    <div className='landingPage'>
      <form className='searchForm' onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
        ></input>
        <button type='submit'>Submit</button>
      </form>
       <div className='searchResults'>
        {books.map(book => {
          console.log(book);
          return (
            <div key={book.isbn13}>
              <h2>{book.book_title}</h2>
              <h2>{book.book_author}</h2>
              <p>{book.summary}</p>
            </div>

          )
        })}
      </div>


    </div>
  )
}

export default LandingPage
