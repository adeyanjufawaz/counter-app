import React from 'react'
import { Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import TestErr from "./components/TestErr";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Counter/>} />
        <Route path="/errorTester" element={<TestErr/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App;
