import React, { useState, useEffect } from 'react'
import axios from 'axios';

const LandingPage = () => {

  // const API_KEY = "6cGZBPSiQzyGuANS9IVyDlpO7PVpViTl";

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState({})
  const baseUrl = 'http://localhost:5050/convert'

  const randomPhi = books.length;
  console.log('num', randomPhi);




  //   items.filter(item => item.id !== id)
  //   items.push(books[Math.floor(Math.random() * books.length)])

  //   console.log(items);

  useEffect(() => {
    getBooks();
  }, [search]);

  const getBooks = async () => {
    axios.get(baseUrl)
    .then(response =>
      setBooks(response.data.results),
      // console.log('response:', response.data)
      );
    }

    const items = []

        for (var i=0; i<3; i++) {
        const item = books[Math.floor(Math.random() * randomPhi)];
        console.log(item);
        if (!items.includes(item)) {
          items.push(item);
        }
        // setResults(items);
      }


  console.log('items', items);
  // useEffect(() => {
  //   randomItems();
  // }, [])


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
          // console.log(book);
          return (
            <div key={book.id}>
              <h2>{book.author}</h2>
              <h2>{book.quote}</h2>
              {/* <p>{book.summary}</p> */}
            </div>

          )
        })}
      </div>


    </div>
  )
}

export default LandingPage
