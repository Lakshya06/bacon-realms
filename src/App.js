import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router'
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Store from "./Components/Store";
import Footer from "./Components/Footer";



function App() {
  const user = localStorage.getItem("token")
  return (
    <div className="App">
      <Header />
      {/* <HomePage /> */}
      {/* <Store /> */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
