import logo from './logo.svg';
import './App.css';
import Home from './ca-auction/layouts/Home';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
