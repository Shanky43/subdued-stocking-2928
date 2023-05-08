import Footer from "./components/HomePage/Footer";
import Navbar from "./components/HomePage/Navbar";
import Allroutes from "./routes/Allroutes";

function App() {
  return (
    <div id="app-body">
      <Navbar />
      <Allroutes />

      <Footer />
    </div>
  );
}

export default App;
