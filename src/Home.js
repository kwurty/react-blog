import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
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


    // You cannot use ASYNC for this. Promises work, but for ASYNC to be useable, you need to create a separate function that is async and call it here
    // useEffect is generally used to 


    // so this is a cool way to rename a destructuring. put WHAT you want and then a colon and then WHAT you want it to be called
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

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