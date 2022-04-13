import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
      <NavBar />
      <Routes>
        <Route path='/'></Route>
      </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
