import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Kwurty Blog</h1>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/create"

                /// Example of inline styling with React
                // style={{
                // color: "red",
                // backgroundColor: "orange",
                // borderRadius: '8px'
                // }}
                > New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;