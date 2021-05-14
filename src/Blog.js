import { useParams } from "react-router";
import useFetch from './useFetch';

const Blog = () => {
    // pulling in parameters from the router here. the useParams are parameters that are passed down by the router.
    const { id } = useParams();

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
                <div>
                    <h1> {blog.title} </h1>
                    <h2> Written by: {blog.author}</h2>
                    <p> {blog.body}</p>
                </div>
            }
        </div>
    )
}

export default Blog