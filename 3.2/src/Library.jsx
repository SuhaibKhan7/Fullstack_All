



import React, { useState } from "react";
export default function Library() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby" },
    { id: 2, title: "To Kill a Mockingbird" },
    { id: 3, title: "abc" },
  ]);
  const [search, setSearch] = useState("");
  const [newBook, setNewBook] = useState("");
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );
  const addBook = () => {
    if (newBook.trim() === "") return;
    const newEntry = { id: Date.now(), title: newBook };
    setBooks([...books, newEntry]);
    setNewBook("");
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1>📚 Library Management</h1>
      {/* Search */}
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* Add Book */}
      <div>
        <input
          type="text"
          placeholder="New book title"
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
        />
        <button onClick={addBook}>Add</button>
      </div>
      {/* Book List */}
      <ul>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <li
              key={book.id}
            >
              <span>{book.title}</span>
              <button
                onClick={() => removeBook(book.id)}
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <p>No books found</p>
        )}
      </ul>
    </div>
  );
}
