import { Suspense, lazy } from "react";

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

const HeaderAndFooter = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

const Home = () => {
  return (
    <HeaderAndFooter>
      <MainContent />
      <Courasel />
      <MainSlider />
      <Discount />
      <Facililtes />
      <Portfolio />
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
      <h1>Contacts</h1>
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

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export default App;

// started at 8 / 12 / 2023
