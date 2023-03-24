import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation/>
      </header>
      <AboutUs/>
      <Services/>
      <Footer/>
    </div>
  );
}
export default App;
