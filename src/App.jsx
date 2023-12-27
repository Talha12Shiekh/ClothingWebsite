import './App.css'
import Navbar from "./Components/BootNavbar";
import MainContent from "./Components/MainContent";
import Products from "./Components/Products";
import Courasel from "./Components/Courasel";
import MainSlider from './Components/MainSlider';
import Trends from './Components/Trends';
import Discount from './Components/Discount';
import Facililtes from './Components/Facililtes';
import Portfolio from './Components/PortFolio';


function App() {
  
  return (
    <>
      <Navbar/>
      <MainContent/>
      <Products/>
      <Courasel/>
      <Trends/>
      <MainSlider/>
      {/* <Discount/> */}
      <Facililtes/>
      <Portfolio/>
    </>
  )
}

export default App







// started at 8 / 12 / 2023 