import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BookDetails = () => {
    const { id } = useParams();
    const { data: book, error, isPending } = useFetch('http://localhost:4000/books/' + id);
    return (
        <div className="book-details">
            {isPending && <div>Loading...</div>}
            {error && <div>error</div>}
            {book && (
                <article>
                    <h2>{book.title}</h2>
                    <p>Written by {book.author}</p>
                    <div>{book.body}</div>
                </article>
            )}
        </div>
    );
}

export default BookDetails;