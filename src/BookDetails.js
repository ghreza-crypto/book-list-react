import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BookDetails = () => {
    const { id } = useParams();
    const { data: book, error, isPending } = useFetch('http://localhost:4000/books/' + id);
    const history = useHistory();
    const handleDelete = () => {
        fetch('http://localhost:4000/books/' + book.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }
    return (
        <div className="book-details">
            {isPending && <div>Loading...</div>}
            {error && <div>error</div>}
            {book && (
                <article>
                    <h2>{book.title}</h2>
                    <p>Written by {book.author}</p>
                    <div>{book.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BookDetails;