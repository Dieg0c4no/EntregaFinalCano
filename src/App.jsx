import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style.css'
import Categories from './components/categories/categories';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductsList from './components/products/ProductsList';
import CategoriesProductsList from './components/categories/categoriesProductsList';
import { ItemDetail } from './components/products/ItemDetail';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito';

 
function App() {


  return (
    <>
    <CartProvider>
     
    <Router>
      
        <Navbar/>
            
          <Routes>  
            
            <Route exact path ='/' element={<Categories/>}/>
            <Route exact path ='/products' element={<ProductsList/>}/>
            <Route exact path ='/category/:categoryId' element={<CategoriesProductsList/>}/>
            <Route exact path='/productDetail/:id' element={< ItemDetail/>}/>
            <Route exact path='/carrito' element={< Carrito/>}/>
           
          </Routes>
    </Router>

    </CartProvider>
    </>
  )
}

export default App


