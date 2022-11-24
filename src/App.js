import Navbar from './components/navbar/navbar'
import { Routes, Route} from "react-router-dom";
import Home from './components/home/Home.jsx';
import About from './components/About/About.jsx';
import Contact_us from './components/contact-us/contact-us';
import Product_details from './components/product_details/product_details';
import ProdectList from './components/productList/ProductList';
import Compare from './components/compare/compare';
import Whishlist from './components/whishlist/whishlist';
import ProductFilter from './components/productFilter/productFilter';
import Sign from './components/sign/sign';
import FAQ from './components/FAQ/FAQ';
import Terms from './components/Terms/terms';
import Error from './components/Error/Error';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import News from './components/Newsletter/News';
import Footer from './components/Footer/footer';
import Cart from './components/Cart/cart';
import ScrollToTop from './components/ss';
import ModeBtn from './components/ModeButton/ModeButton';


function App() {
  // var element;
  // var location = window.location.pathname;
  // const [login] = useRecoilValue(loginState)
  // const [cartGlobal, setCartGlobal] = useRecoilState(GlobalCart)
  // const [cartUser , setCartUser] = useRecoilState(cart)
  // if (login) {
  //   setCartUser(cartGlobal)
  //   setCartGlobal([])
  // } else {
  //   console.log("aaa")
  // }

  return (
    <>
      <RecoilRoot>
          <Navbar />
          <ModeBtn />
            <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="home" element={<Home />}  />
            <Route path="about" element={<About />}/>
            <Route path="contact-us" element={<Contact_us />} />
            <Route path="Compare" element={<Compare />} />
            <Route path="Whishlist" element={<Whishlist />} />
            <Route path="product/:id" element={<Product_details />} />
            <Route path="productList" element={<ProdectList />} />
            <Route path="productList/:title" element={<ProdectList />} />
            <Route path="account" element={<Sign />} />
            <Route path="FAQ" element={<FAQ />} />
            <Route path="Terms" element={<Terms />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Routes>
        <ProductFilter filter1 = "men's clothing" filter2 = "jewelery" filter3 = "women's clothing"/>
          <News />
          <Footer/>
        </RecoilRoot>
    </>
  );
  
}

export default App;
