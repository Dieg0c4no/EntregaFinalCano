import Navbar from './components/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style.css'
import Categories from './components/categories/categories';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductsList from './components/products/ProductsList';
function App() {

  return (
    <>
      
    <Router>
        <Navbar/>
        <Routes>
          <Route exact path ='/' element={<Categories/>}/>
          <Route exact path ='/products' element={<ProductsList/>}/>
        </Routes>
    </Router>

    </>
  )
}

export default App


