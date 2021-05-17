import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import Blog from './Blog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './404';
import { useEffect, useState } from 'react';

function App() {

  const [isLogged, setLogged] = useState(false)

  useEffect(() => {

  })
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blog/:id">
              <Blog />
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;