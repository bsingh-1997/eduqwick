import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
       <Routes> 
             <Route path="/" element={<Home/>} ></Route>
          </Routes>
  
    </div>
  );
}

export default App;
