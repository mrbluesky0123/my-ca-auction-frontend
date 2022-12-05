import logo from './logo.svg';
import './App.css';
import Main from './ca-auction/layouts/Main';
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
  );
}

export default App;
