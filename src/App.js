import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router'
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Store from "./Components/Store";
import Footer from "./Components/Footer";

// export const UserContext = React.createContext(null);

function App() {
  // const [user, setUser] = useState(null);
  // const user = localStorage.getItem("token");
  // console.log(user);
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
