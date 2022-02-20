import "./App.css";
import HeroArea from "./Componenets/HeroArea";
import Cardgrid from "./Componenets/Cardgrid";
import ContactForm from "./Componenets/ContactForm";
import Footer from "./Componenets/Footer";
import Textblock from "./Componenets/Textblock";
function App() {
  return (
    <div className="App">
      <HeroArea />
      <Textblock />
      <Cardgrid />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
