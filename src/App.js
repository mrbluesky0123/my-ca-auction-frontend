import logo from './logo.svg';
import './App.css';
import Main from './ca-auction/layouts/Main';
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
