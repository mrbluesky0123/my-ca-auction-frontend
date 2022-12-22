import logo from './logo.svg';
import './App.css';
import Main from './ca-auction/layouts/Main';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Login from "./ca-auction/pages/login/Login";
import React from "react";
import ErrorBoundary from "./ca-auction/common/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
