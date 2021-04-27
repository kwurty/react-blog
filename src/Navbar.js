const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Kwurty Blog</h1>
            <div className="links">
                <a href="/"> Home </a>
                <a href="/create"

                /// Example of inline styling with React
                // style={{
                // color: "red",
                // backgroundColor: "orange",
                // borderRadius: '8px'
                // }}
                > New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;