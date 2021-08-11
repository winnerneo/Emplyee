
import './App.css';
import Home from './components/Home';
import Search1 from './components/search1'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      
      <Home/>
      <Search1/>
    </div>
  );
}

export default App;
