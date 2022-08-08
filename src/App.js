import HowItWorks from './components/HowItWorks';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Products from './components/Products';
import ResCommunity from './components/ResCommunity';
import './components/styles/main.scss';

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <ResCommunity />
      <HowItWorks />
      <Products />
    </>
  );
}

export default App;
