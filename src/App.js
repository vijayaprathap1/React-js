import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/menuComponent';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href=''>Vj Restaurant</NavbarBrand>
        </div>
      </Navbar>
      
    </div>
  );
}

export default App;
