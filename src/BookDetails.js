import { useParams } from "react-router-dom";

const BookDetails = ()  => {
    const {id}=useParams();
    return (
        <div className="book-details">
            <h2>book details-{id}</h2>
        </div>
    );
}
 
export default BookDetails;