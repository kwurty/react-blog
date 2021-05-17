import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';

const Blog = () => {
    // pulling in parameters from the router here. the useParams are parameters that are passed down by the router.
    const { id } = useParams();

    // use History to get access to router commands. Go back or forward or to a specific page. Useful in functions and what not. 
    const history = useHistory();
    const deleteBlog = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    // We are reusing the fetch hook/module that we created earlier and requesting the blog content based on the router param
    const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id);
    return (
        <div className="blog">
            {/* 
                below is checking if the fetch request is loading or if it has an error.
                if either is true, display the loading or error messages

                if we have the content from the blogpost, we are posting it
            */}
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog &&
                <article>
                    <h2> {blog.title} </h2>
                    <p> Written by: {blog.author}</p>
                    <div className="content"> {blog.body}</div>
                    <button onClick={deleteBlog}> Delete </button>
                </article>
            }
        </div>
    )
}

export default Blog