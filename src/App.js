import './App.css';
import Main from './ca-auction/layouts/Main';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "./ca-auction/pages/login/Login";
import React from "react";
import GlobalContext from "./ca-auction/common/GlobalContext";

function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext>
  );
}

export default App;
