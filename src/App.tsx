import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header';
import Footer from './Components/footer'; 
import Home from './Pages/Hheader';
import Shop from './Pages/Sheader';
import NewArrival from './Pages/Arrheader';
import Blog from './Pages/Bheader';
import ContactUs from './Pages/Cheader';
import AboutUs from './Pages/Aheader';
import { CartProvider } from './Cartcontext/Cartcontexr';
import ProductDetails from './Components/Productdetail';
import FloatingButtons from './Components/floatingbutton'; 

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <FloatingButtons />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/new-arrival" element={<NewArrival />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;


