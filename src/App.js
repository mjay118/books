import logo from './logo.svg';
import './App.css';
import { Button ,Navbar,NavbarBrand,NavbarToggler,Collapse,Nav} from 'reactstrap';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
const contentStyle = {
  height: '160px',
  // color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  // background: '#364d79',
};

function App() {
  return (
    <div className="App">
      <div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
    <h2>Gugu Books</h2>
    </NavbarBrand>
   
  </Navbar>
</div>
<Carousel autoplay>
    <div>
      <h3 style={contentStyle} className='carousel-color'>One way destination for budding authors and readers.</h3>
    </div>
    <div>
      <h3 style={contentStyle} className='carousel-color'>We are tied with 20+ publication houses and Awards Community.</h3>
    </div>
    <div>
      <h3 style={contentStyle} className='carousel-color'>We aim to provide a recognition to authors and readers.</h3>
    </div>
    <div>
      <h3 style={contentStyle} className='carousel-color'>Connect with us.</h3>
    </div>
  </Carousel>
    </div>
  );
}

export default App;
