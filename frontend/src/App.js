import "./index.css";
import Nav from "./components/NavBar/Nav";
import LandingPage from "./pages/LandingPage/LandingPage";
import BusinessIntro from "./pages/BusinessIntro/BusinessIntro";
import BussForm1 from "./components/BussForm/BussForm1";
import BussForm2 from "./components/BussForm/BussForm2";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <LandingPage /> */}
      {/* <BusinessIntro /> */}
      {/* <BussForm1 /> */}
      <BussForm2 />
    </div>
  );
}

export default App;
