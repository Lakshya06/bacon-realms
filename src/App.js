import React from "react";

import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Store from "./Components/Store";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomePage /> */}
      <Store />
      <Footer />
    </div>
  );
}

export default App;
