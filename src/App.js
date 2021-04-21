import { BrowserRouter as Router, Route } from 'react-router-dom';  
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Home from './Home'
import SingleContact from './SingleContact'
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path = '/' component={Home} />
          <Route path = '/singlecontact/:id' component={SingleContact} />
      </Router>
    </div>
  );
}

export default App;
