import {BrowserRouter as Router,Route } from "react-router-dom"
import './App.css';
import Home from './container/Home';





function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact/>
    </Router>
  );
}

export default App;
