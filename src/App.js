import AboutUs from "./components/AboutUs/AboutUs";
import BlueBg from "./components/BlueBg/BlueBg";
import Certifications from "./components/Certifications/Certifications";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import QualityCards from "./components/QualityCards/QualityCards";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import WhyInam from "./components/WhyInam/WhyInam";
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
      <WhyInam />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
