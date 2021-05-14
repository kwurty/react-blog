import { Link } from "react-router-dom";

// PROPS must be received in the child component by simply adding it as a parameter
const BlogList = (props) => {
    const blogs = props.blogs;
    return (
        <div className="blog-list">
            {/* 
            to iterate, you need to use the map method for the array.
            Notice that the method uses paranthesis rather than curly braces to encapsulate
            */}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <h2> {blog.title} </h2>
                    </Link>
                    <p>Written by: {blog.author}</p>
                </div>
            ))}

        </div>
    );
}

export default BlogList;