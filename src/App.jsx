import { Suspense, lazy,useState } from "react";
import "./App.css";

const Navbar = lazy(() => import("./Components/BootNavbar"));
const MainContent = lazy(() => import("./Components/MainContent"));
const Products = lazy(() => import("./Components/Products"));
const Courasel = lazy(() => import("./Components/Courasel"));
const MainSlider = lazy(() => import("./Components/MainSlider"));
const Trends = lazy(() => import("./Components/Trends"));
const Discount = lazy(() => import("./Components/Discount2"));
const Facililtes = lazy(() => import("./Components/Facililtes"));
const Portfolio = lazy(() => import("./Components/PortFolio"));
const Footer = lazy(() => import("./Components/Footer"));

import { Routes, Route } from "react-router-dom";
import FallBack from "./Components/FallBack";
import NavigationShowing from "./Components/NavigationShowing";
import { PRODUCTS, TRENDS } from "./data/Data";
import { Heading, SingleTrendCard } from "./Components/Trends";
import Contacts from "./Components/Contacts";
const SingleProduct = lazy(() => import("./Components/SingleProduct"));


const HeaderAndFooter = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Portfolio />
      <Footer />
    </>
  );
};

const Home = () => {
  const [showThankModal,setshowThankModal] = useState(false)

  return (
    <HeaderAndFooter>
      <MainContent  showThankModal={showThankModal}setshowThankModal={setshowThankModal}/>
      <MainSlider />
      <Discount setshowThankModal={setshowThankModal}/>
      <Courasel setshowThankModal={setshowThankModal}/>
      <Facililtes />
    </HeaderAndFooter>
  );
};

const ProductsScreen = () => {
  return (
    <HeaderAndFooter>
      <NavigationShowing />
      <Products />
    </HeaderAndFooter>
  );
};
const TrendsScreen = () => {
  return (
    <HeaderAndFooter>
      <NavigationShowing />
      <Trends />
    </HeaderAndFooter>
  );
};
const ContactsScreen = () => {
  return (
    <HeaderAndFooter>
      <NavigationShowing />
      <Contacts/>
    </HeaderAndFooter>
  );
};

function App() {
  return (
    <Suspense fallback={<FallBack />}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<FallBack />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="Products"
          element={
            <Suspense fallback={<FallBack />}>
              <ProductsScreen />
            </Suspense>
          }
        />
        <Route
          path="Trends"
          element={
            <Suspense fallback={<FallBack />}>
              <TrendsScreen />
            </Suspense>
          }
        />
        <Route
          path="Contacts"
          element={
            <Suspense fallback={<FallBack />}>
              <ContactsScreen />
            </Suspense>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;

// started at 8 / 12 / 2023
