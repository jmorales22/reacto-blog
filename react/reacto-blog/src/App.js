import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Blog from './components/Blog';
import SingleBlog from './components/SingleBlog';

function App() {
  return (
    <div className="App">
      <div>
      <Router>
        <Route exact path='/' component={Blog} />
        <Route path='/blog/:id?' component={SingleBlog}/>
      </Router>
      </div>
    </div>
  );
}

export default App;
