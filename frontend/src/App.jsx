import React from "react";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/mainRoutes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="py-6 px-10 w-screen h-screen overflow-x-hidden bg-white text-green-500">
      <Navbar />
      <Mainroutes/>
      <Footer />
    </div>
  );
};

export default App;