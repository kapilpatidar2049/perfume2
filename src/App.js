import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes  ,Route } from "react-router-dom";
import Create_perfume from "./component/Pagess/Create_perfume";
import Footer from "./component/Pagess/Footer";
import Shop from "./component/Pagess/Shop";
import Signup from "./component/Pagess/Signup";
import Dashboard from "./component/Pagess/Dashboard";
import Header from "./component/Pagess/Header";
import Login from "./component/Pagess/Login";
import Checkout from "./component/Pagess/Checkout";
import Forgot_pass from "./component/Pagess/Forgot_pass";
import HerPage from "./component/Pagess/HerPage";
import HimPage from "./component/Pagess/HimPage";
import KidsPage from "./component/Pagess/KidsPage";
import HomePage from "./component/Pagess/HomePage";
import Blogs from "./component/Pagess/Blogs";
import AboutUs from "./component/Pagess/AboutUs";
import Addcart from "./component/Pagess/AddCart";
import TravelKit from "./component/Pagess/TravelKit";
import FamilyKit from "./component/Pagess/FamilyKit";
import HimAndHerKit from "./component/Pagess/HimAndHerKit";
import KidsKit from "./component/Pagess/KidsKit";
import ExploreKit from "./component/Pagess/ExploreKit";
import Faq_Page from "./component/Pagess/Faq_Page";
import ShipingPage from "./component/Pagess/ShipingPage";
import Terms_conditions from "./component/Pagess/Terms_conditions";
import PrivacyPolicy from "./component/Pagess/PrivacyPolicy";
import ReturnAndRefund from "./component/Pagess/ReturnAndRefund";
import HelpContact from "./component/Pagess/HelpContact";
import GiftCollections from "./component/Pagess/GiftCollections";
import Bulk from "./component/Pagess/Bulk";
import Quizes from "./component/Pagess/Quize";
import DiscoveryKits from "./component/Pagess/DiscoveryKits";
import ProductPage from "./component/Pagess/ProductPage";
// import GiftPerfume from "./component/Pagess/GiftPerfume";
// import GiftCard from "./component/Pagess/GiftCard";
// import GiftPerfumeOld from "./component/Pagess/GiftPerfumeOld";
// import Gift_Personalised_Perfume from "./component/Pagess/Gift_Personalised_Perfume";


function App() {  
  return (
   <>
    <Router>     
      <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Create_perfume" element={<Create_perfume />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/text" element={<text />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Addcart" element={<Addcart />} />
          <Route path="/Edit" element={<Create_perfume />} />
          <Route path="/loginDashboard" element={<Dashboard/> } />
          <Route path="/login" element={<Login/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/Forgot_pass" element={<Forgot_pass/> } />
          <Route path="/HerPage" element={<HerPage />} />
          <Route path="/HimPage" element={<HimPage />} />
          <Route path="/KidsPage" element={<KidsPage />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/TravelKit" element={<TravelKit />} />
          <Route path="/FamilyKit" element={<FamilyKit />} />
          <Route path="/HimAndHerKit" element={<HimAndHerKit />} />
          <Route path="/KidsKit" element={<KidsKit />} />
          <Route path="/ExploreKit" element={<ExploreKit />} />
          <Route path="/faq_page" element={<Faq_Page />} />
          <Route path="/Shipping" element={<ShipingPage />} />
          <Route path="/Terms_conditions" element={<Terms_conditions />} />
          <Route path="/Privacy" element={<PrivacyPolicy />} />
          <Route path="/ReturnRefund" element={<ReturnAndRefund />} />
          <Route path="/Contact" element={<HelpContact />} />
          <Route path="/Giftcollection" element={<GiftCollections />} />          
          <Route path="/Bulk" element={<Bulk />} />
          <Route path="/Quizes" element={<Quizes />} />
          <Route path="/discovery" element={<DiscoveryKits />} />
          <Route path="/Product" element={<ProductPage />} />
          {/** <Route path="/Gift" element={<GiftPerfume />} />
          <Route path="/GiftCards" element={<GiftCard />} />
          <Route path="/GiftPersonal" element={<Gift_Personalised_Perfume />} /> */}    
        </Routes>
  
      <div className="container">
       <Footer />
      </div>
    </Router>
  
    </>
  );
}

export default App;
