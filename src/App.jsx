import "./App.css";
import {
  BrowserRouter as NavigatorWrapper,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Navbar as StaticNavbar } from "./components/Navbar";
import {Footer as StaticFooter} from "./components/Footer"
function App() {
  return (
    <div className="flex flex-col min-h-screen	text-white font-Inter">
      <NavigatorWrapper>
        <StaticNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <StaticFooter/>
      </NavigatorWrapper>
    </div>
  );
}

export default App;
