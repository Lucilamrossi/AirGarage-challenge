import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app-body">
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
