import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('test');
    const [body, setBody] = useState('test');
    const [author, setAuthor] = useState('Mario');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsLoading(true);
        fetch(' http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then((results) => {
            setIsLoading(false);
            // history.goBack();
            history.push('/');
        })
    }
    return (
        <div className="create">
            <h1> Add a new blog </h1>
            <form
                onSubmit={handleSubmit}
            >
                <label> Blog title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label> Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                <label> Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>

                </select>
                {
                    !isLoading && <button>Add Blog</button>
                }
                {
                    isLoading && <button disabled>Adding blog...</button>
                }
            </form>
        </div>
    );
}

export default Create;