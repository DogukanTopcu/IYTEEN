import Navbar from "./components/Navbar";

import Events from "./components/Events";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container max-w-7xl mx-auto px-5 md:px-10 mt-24 md:mt-32">
        <Events />
      </div>

      <Footer />
    </div>
  );
}

export default App;
