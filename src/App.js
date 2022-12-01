import logo from './logo.svg';
import './App.css';
import Home from './ca-auction/layouts/Home';
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
