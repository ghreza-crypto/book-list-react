import BookList from "./BookList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: books, isPending, error } = useFetch('http://localhost:4000/books');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {books && <BookList books={books} title="All Books!" />}
            {books && <BookList books={books.filter((book) => book.author === 'ahmad')} title="Ahmad's Books!" />}
        </div>
    );
}

export default Home;