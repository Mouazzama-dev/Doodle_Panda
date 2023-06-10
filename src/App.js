import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Achievement from './components/Achievement';
import GameDood from './components/GameDood';
import Faqs from './components/Faqs';
import Benefitutility from './components/Benefitutility';
import Whitepaper from './components/Whitepaper';
import DoodHouse from './components/DoodHouse';
import DoodTeam from './components/DoodTeam';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
        <Header />
        <Banner />
        <About />
        <Achievement />
        <GameDood  />
        <DoodHouse />
        <Benefitutility />
        <Whitepaper />
        <DoodTeam />
        <Faqs />
        <Footer />

    </div>
  );
}

export default App;
