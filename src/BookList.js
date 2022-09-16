const BookList = ({ books, title, handleDelete }) => {
    return (
        <div className="book-list">
            <h2>{title}</h2>
            {books.map((book) => (
                <div className="book-preview" key={book.id}>
                    <h2>{book.title}</h2>
                    <p>author: {book.author}</p>
                    <button onClick={() => handleDelete(book.id)}>delete book</button>
                </div>
            ))}
        </div>
    );
}

export default BookList;