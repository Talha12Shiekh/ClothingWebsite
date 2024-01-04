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
import { PRODUCTS, TRENDS } from "./data/Data";
import { Heading, SingleTrendCard } from "./Components/Trends";
import Contacts from "./Components/Contacts";
const SingleProduct = lazy(() => import("./Components/SingleProduct"));

const HomeScreenProducts = () => {
  return (
    <>
      <h3 className="mx-5 monteserrat products_heading position-relative app_clothes mb-5 ">
        PRODUCTS
      </h3>
      <div className="d-flex justify-content-around flex-wrap">
        {PRODUCTS.slice(0, 3).map((product) => {
          return <SingleProduct {...product} key={product.key} />;
        })}
      </div>
    </>
  );
};

const HomeScreenTrends = () => {
  return (
    <div className="container my-5">
      <h3 className="monteserrat products_heading position-relative app_clothes mb-5">
        TRENDS
      </h3>
      <div className="row row-cols-md-2 row-cols-lg-3 row-cols-1">
        {TRENDS.slice(0, 4).map((trend) => {
          return <SingleTrendCard key={trend.key} {...trend} />;
        })}
      </div>
    </div>
  );
};

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
  return (
    <HeaderAndFooter>
      <MainContent />
      <Courasel />
      <HomeScreenProducts />
      <MainSlider />
      <HomeScreenTrends />
      <Discount />
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
