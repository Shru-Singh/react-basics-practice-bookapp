import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

import {books} from './books';
import Book from './Book';

const firstbook = {
    img: 'https://images-eu.ssl-images-amazon.com/images/I/718gSz1VThL._AC_UL400_SR266,400_.jpg',
    title: 'The Diary of A Young Girl',
    author:  'Anne Frank',
  };

  const secondbook = {
    img: 'https://images-eu.ssl-images-amazon.com/images/I/718gSz1VThL._AC_UL400_SR266,400_.jpg',
    title: 'The Diary of A Young Girl',
    author:  'Anne Frank',
  };

function BookList() {
return (
  <section className='Booklist'>
    {books.map((book) => {
      return <Book key={book.id} {...book}></Book>
    })}
    <Book
      img={firstbook.img}
      title={firstbook.title}
      author={firstbook.author}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          At repudiandae possimus tempora repellendus, 
          a obcaecati omnis nostrum facere repellat aperiam!</p>
  </Book>
    <Book 
    img={secondbook.img}
    title={secondbook.title}
    author={secondbook.author}
    />
    </section>
);
}


ReactDom.render(<BookList/>, document.getElementById('root'));