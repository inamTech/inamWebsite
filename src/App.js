import BlueBg from "./components/BlueBg/BlueBg";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import QualityCards from "./components/QualityCards/QualityCards";
function App() {
  return (
    <div className="App">
      <BlueBg>
        <Navbar />
        <Header />
      </BlueBg>
      <QualityCards />
    </div>
  );
}

export default App;
