import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('ahmad');
    return (
        <div className="create">
            <h2>Add a new Book</h2>
            <form action="">
                <label htmlFor="">Book title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

                <label htmlFor="">Book body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)} ></textarea>

                <label htmlFor="">Book author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="ahmad">Ahmad</option>
                    <option value="ali">Ali</option>
                </select>
                <button>Add book</button>
            </form>
        </div>
    );
}

export default Create;