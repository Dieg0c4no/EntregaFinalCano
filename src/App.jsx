import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style.css'
import Categories from './components/categories/categories';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductsList from './components/products/ProductsList';
import CategoriesProductsList from './components/categories/categoriesProductsList';
function App() {

  return (
    <>
      
    <Router>
          <Navbar/>
        <Routes>
          <Route exact path ='/' element={<Categories/>}/>
          <Route exact path ='/products' element={<ProductsList/>}/>
          <Route exact path ='/category/:categoryId' element={<CategoriesProductsList/>}/>
        </Routes>
    </Router>

    </>
  )
}

export default App


