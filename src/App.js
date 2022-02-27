import AboutUs from "./components/AboutUs/AboutUs";
import BlueBg from "./components/BlueBg/BlueBg";
import Certifications from "./components/Certifications/Certifications";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import QualityCards from "./components/QualityCards/QualityCards";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
function App() {
  return (
    <div className="App">
      <BlueBg>
        <Navbar />
        <Header />
      </BlueBg>
      <QualityCards />
      <Services />
      <Certifications />
      <AboutUs />
      <Team />
    </div>
  );
}

export default App;
