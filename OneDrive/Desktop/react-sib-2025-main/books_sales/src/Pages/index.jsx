import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import Hero from "../components/shared/Hero";
import ProductList from "../components/shared/ProductList";
import React, { useState } from 'react';
import initialBooks from '../Utils/books';

// Komponen untuk daftar buku dan form tambah buku
const BooksManager = () => {
  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState({ title: "", author: "", price: "" });

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!newBook.title || !newBook.author || !newBook.price) {
      alert("Mohon lengkapi semua kolom!");
      return;
    }

    const id = books.length + 1;
    const newEntry = {
      ...newBook,
      id,
      price: parseInt(newBook.price, 10)
    };
    setBooks([...books, newEntry]);
    setNewBook({ title: "", author: "", price: "" });
  };

  return (
    <div className="container" style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2>Daftar Buku</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} - {book.author} - Rp{book.price}
          </li>
        ))}
      </ul>

      <h3>Tambah Buku</h3>
      <input
        name="title"
        placeholder="Judul"
        value={newBook.title}
        onChange={handleChange}
        style={{ marginRight: "0.5rem" }}
      />
      <input
        name="author"
        placeholder="Penulis"
        value={newBook.author}
        onChange={handleChange}
        style={{ marginRight: "0.5rem" }}
      />
      <input
        name="price"
        type="number"
        placeholder="Harga"
        value={newBook.price}
        onChange={handleChange}
        style={{ marginRight: "0.5rem" }}
      />
      <button onClick={handleAdd}>Tambah</button>
    </div>
  );
};

// Komponen utama halaman Home
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProductList />
      <BooksManager />
      <Footer />
    </>
  );
}
