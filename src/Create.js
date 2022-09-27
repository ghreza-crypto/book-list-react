import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('ahmad');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { title, body, author };
        setIsPending(true);
        fetch('http://localhost:4000/books', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(book)
        }).then(() => {
            setIsPending(false);
            history.push('/');
        })

    }
    return (
        <div className="create">
            <h2>Add a new Book</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Book title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

                <label htmlFor="">Book body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)} ></textarea>

                <label htmlFor="">Book author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="ahmad">Ahmad</option>
                    <option value="ali">Ali</option>
                </select>
                {!isPending && <button>Add book</button>}
                {isPending && <button disabled>Adding book...</button>}
            </form>
        </div>
    );
}

export default Create;