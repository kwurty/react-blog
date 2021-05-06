import { useState, useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {
    // let name = 'mario';

    // use state
    // assing destructed array to the useState
    // first value will select the parameter of the useState, thus I am giving it a 'name' variable
    // second is what you use to adjust the first value - it is the adjuster. It is a FUNCTION
    // generally this is setVARIABLENAME. so setName is my name
    // const [name, setName] = useState('mario');

    // const [age, setAge] = useState(31);

    // const handleClick = () => {
    //     setName('luigi');
    //     setAge(32);
    // }
    const [blogs, setBlogs] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // You cannot use ASYNC for this. Promises work, but for ASYNC to be useable, you need to create a separate function that is async and call it here
    // useEffect is generally used to 
    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok) throw Error('Unable to retrieve data from endpoint')
                return res.json()
            })
            .then((data) => {
                setLoading(false);
                setBlogs(data);
            })
            .catch((e) => {
                setLoading(false);
                setError(e.message);
            })
    }, [])

    return (
        <div className="home">
            { error && <div>{error}</div>}
            { isLoading && <div> Loading ...</div>}
            {/* 
            Passing props to a component is as easy as entering what you want the name to be and what the value should be (in curly braces)
            All declared variables are stored under the props object. Props object must be received as a parameter
            */}
            {blogs && <BlogList blogs={blogs} />}

            {/* <p> {name} is {age} years old</p> */}
            {/* <button onClick={handleClick}> Click me </button> */}
        </div>
    );
}

export default Home;