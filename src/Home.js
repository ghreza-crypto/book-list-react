import { useEffect } from "react";
import { useState } from "react";
import BookList from "./BookList";

const Home = () => {
    const [books, setBooks] = useState(null);
    // const handleDelete = (id) => {
    //     const newBooks = books.filter(book => book.id !== id);
    //     setBooks(newBooks);
    // }
    useEffect(() => {
        fetch('http://localhost:4000/books')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBooks(data);
            });
    }, []);
    return (
        <div className="home">
            {books && <BookList books={books} title="All Books!" />}
            {books && <BookList books={books.filter((book) => book.author === 'ahmad')} title="Ahmad's Books!" />}
        </div>
    );
}

export default Home;