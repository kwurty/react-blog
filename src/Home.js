import { useState } from 'react';
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
    const [blogs, setBlogs] = useState([
        {
            title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1
        },
        {
            title: 'Ha cha cha', body: 'lorem ipsum...', author: 'mario', id: 2
        },
        {
            title: 'You cannot stop me', body: 'lorem ipsum...', author: 'mario', id: 3
        },
        {
            title: 'Eat at Joes', body: 'lorem ipsum...', author: 'mario', id: 4
        },
    ])

    return (
        <div className="home">
            {/* 
            Passing props to a component is as easy as entering what you want the name to be and what the value should be (in curly braces)
            All declared variables are stored under the props object. Props object must be received as a parameter
            */}
            <BlogList blogs={blogs} />

            {/* <p> {name} is {age} years old</p> */}
            {/* <button onClick={handleClick}> Click me </button> */}
        </div>
    );
}

export default Home;