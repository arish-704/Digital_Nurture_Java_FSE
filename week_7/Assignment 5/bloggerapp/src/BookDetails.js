
import React from 'react';

function BookDetails({ books }) {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h3>
            {book.bname}
            {}
            {book.isBestseller && <span style={{ color: 'orange', fontSize: '14px' }}> (Bestseller!)</span>}
          </h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;