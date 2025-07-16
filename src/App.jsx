import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx';
import Menu from './Components/Menu.jsx';
import pizzaData from './index.js';
// import './index.css';


function App() {

  return (
    <div className='container'>
    <Header/>
    <Menu pizzaData={pizzaData}/>
    <Footer/>
    </div>
  )
}


export default App
