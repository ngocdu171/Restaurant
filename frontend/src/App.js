import "./App.css";
import { Typography } from "@material-ui/core";
import Test from "./components/Test";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
