import { ItemListcontainer } from "./components/ItemListContainer/ItemListcontainer";
import NavBar from "./components/navbar/navbar"
import './components/navbar/NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const greeting = "Tienda de Mascotas";

  return (
    <>
   <NavBar/>
    <ItemListcontainer greeting={greeting}/>
    </>
  )
}

export default App
