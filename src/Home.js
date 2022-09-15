import { useState } from "react";

const Home = () => {
    const [books, setBooks] = useState([
        { title: 'book 1', body: 'book one body...', author: 'ali', id: 1 },
        { title: 'book 2', body: 'book two body...', author: 'ahmad', id: 2 },
        { title: 'book 3', body: 'book three body...', author: 'mahmod', id: 3 },
    ]);
    return (
        <div className="home">
            {books.map((book) => (
                <div className="book-preview" key={book.id}>
                    <h2>{book.title}</h2>
                    <p>author: {book.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;