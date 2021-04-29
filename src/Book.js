import React from 'react'

const Book = (props) => {
  const { img, title, author }= props;

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert ('The book is awesome')
  };
  const complexExample = (author) => {
   console.log(author);
  }
  return (
    <>
    <article className='Book'>
     <Image/>
     <Title />
     <Author />
     <button type='button' onClick={clickHandler}>About</button>
    </article>
     <article className='Book'
     onMouseOver={() => {
       console.log(title);
     }}>
      <img src={img} alt=""/>
     <h1 onClick={() => console.log(title)}>{title}</h1>
     <h4>{author}</h4>
     {props.children}
     <button type='button' onClick={clickHandler}>About</button>
     <button type='button' onClick={() => complexExample(author)}>Complex Example</button>
     </article>
     </>
  );
}

const Image = () => (
  <img src="https://images-eu.ssl-images-amazon.com/images/I/61Iz2yy2CKL._AC_UL400_SR260,400_.jpg" alt=""/>
);

const Title = () => <h1>The Monk Who Sold His Ferrari</h1>
const Author = () => <h4 style={{ color: '#617d98', fontSize: '1rem',
margin: '0.25rem 0' }}>Robin Sharma</h4>


export default Book
