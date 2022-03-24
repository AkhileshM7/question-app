import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questions from "./components/Questions";
import PageNotFound from "./error/PageNotFound";
import Result from "./components/Result";

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/question/:id" element={<Questions />} />
          <Route path="/result" element={<Result/>} /> 
          <Route path="/*" element={<PageNotFound />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
