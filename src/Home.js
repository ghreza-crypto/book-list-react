import { useState } from "react";
import BookList from "./BookList";

const Home = () => {
    const [books, setBooks] = useState([
        { title: 'book 1', body: 'book one body...', author: 'ali', id: 1 },
        { title: 'book 2', body: 'book two body...', author: 'ahmad', id: 2 },
        { title: 'book 3', body: 'book three body...', author: 'mahmod', id: 3 },
    ]);
    return (
        <div className="home">
            <BookList books={books} title="All Books!" />
        </div>
    );
}

export default Home;