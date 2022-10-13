import Navbar from './components/navbar/navbar'
import { Routes, Route} from "react-router-dom";
import Home from './components/home/Home.jsx';
import About from './components/About/About.jsx';
import Feature from './components/feature/feature';
import Blog from './components/blog/blog';
import Contact_us from './components/contact-us/contact-us';
import Product_details from './components/product_details/product_details';
import ProdectList from './components/productList/ProductList';
import Compare from './components/compare/compare';
import Whishlist from './components/whishlist/whishlist';
import ProductFilter from './components/productFilter/productFilter';
import { createContext, useEffect, useState } from 'react';
import Sign from './components/sign/sign';
import FAQ from './components/FAQ/FAQ';
import Terms from './components/Terms/terms';
import Error from './components/Error/Error';
import { RecoilRoot } from 'recoil';

export const loginContext = createContext()

function App() {
  // var element;
  // var location = window.location.pathname;

  const [login , setLogin] = useState(false)
  
  return (
    <>
      <RecoilRoot>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="home" element={<Home />}  />
          <Route path="about" element={<About />}/>
          <Route path="blog" element={<Blog />} />
          <Route path="feature" element={<Feature />} />
          <Route path="contact-us" element={<Contact_us />} />
          <Route path="Compare" element={<Compare />} />
          <Route path="Whishlist" element={<Whishlist />} />
          <Route path="product/:id" element={<Product_details />} />
          <Route path="productList/:title" element={<ProdectList />} />
          <Route path="account" element={<Sign />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="Terms" element={<Terms />} />
          <Route path="*" element={<Error />} />
        </Routes>
      <ProductFilter filter1 = "men's clothing" filter2 = "jewelery" filter3 = "women's clothing"/>
      </RecoilRoot>
    </>
  );
  
}

export default App;