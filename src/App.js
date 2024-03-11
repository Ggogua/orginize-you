import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Head from "./components/Head";
import Headnext from "./components/Headnext";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Loading from "./components/Loading";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Head />
              <Headnext />
              <Body />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Router>
  );
}

export default App;
