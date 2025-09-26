import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Mainroutes from "./Routes/Mainroutes";

const App = () => {
  return (
    <div className="py-6 px-10 w-screen h-screen bg-black overflow-x-hidden  text-green-500">
      <Navbar />
      <Mainroutes/>
      <Footer />
    </div>
  );
};

export default App;