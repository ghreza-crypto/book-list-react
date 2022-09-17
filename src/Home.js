import { useEffect } from "react";
import { useState } from "react";
import BookList from "./BookList";

const Home = () => {
    const [books, setBooks] = useState(null);
    const [isPending, setIsPending] = useState(true);
    // const handleDelete = (id) => {
    //     const newBooks = books.filter(book => book.id !== id);
    //     setBooks(newBooks);
    // }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:4000/books')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setBooks(data);
                    setIsPending(false);
                });
        }, 1000);
    }, []);

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {books && <BookList books={books} title="All Books!" />}
            {books && <BookList books={books.filter((book) => book.author === 'ahmad')} title="Ahmad's Books!" />}
        </div>
    );
}

export default Home;