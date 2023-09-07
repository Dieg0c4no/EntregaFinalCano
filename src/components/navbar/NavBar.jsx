import {AppBar, Button, Toolbar} from '@mui/material';
import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';



const NavBar = () => {
  return (
    <AppBar>
      <Toolbar className='toolbar-css'>
        <Button >
          🐶 Luna
        </Button>
        <Button>
          PERROS
        </Button>
        <Button>
          GATOS
        </Button>
        <Button>
          ALIMENTOS
        </Button>

       <CartWidget/>
        
      </Toolbar>
    </AppBar>
   
  )
}

export default NavBar




