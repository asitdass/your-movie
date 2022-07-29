import React from 'react'
import Home from './Home'
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import SingleMovie from './SingleMovie';
import Error from './Error';
import "./App.css";

const App = () => {
  return (
    <div>
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </HashRouter>
    </div>
  )
}

export default App