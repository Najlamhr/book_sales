import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import ProductList from "../../components/shared/ProductList";
import React from 'react';
import books from '../Utils/books';

const Book = () => {
  return (
    <div className="container">
      <h2>Halaman Buku</h2>
      {books.map((book) => (
        <div key={book.id}>
          <h4>{book.title}</h4>
          <p>Penulis: {book.author}</p>
          <p>Harga: Rp{book.price}</p>
        </div>
      ))}
    </div>
  );
};


export default function Books() {
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
}
