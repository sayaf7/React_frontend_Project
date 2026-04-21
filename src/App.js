import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './pages/About'
import Work from './pages/Work';
import Contact from './pages/Contact';
import Banner from './Component/Banner/Banner';
import Logo from './Component/Logo/Logo';
import Threeicon from './Component/ThreeIcon/Threeicon';
import Latestwork from './Component/Latestwork/Latestwork';
import Testimonial from './Component/Testimonial/Testimonial';
import Login from './Component/Login/Login';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path={'/about'} element={<About />}></Route>
      <Route path={'/work'} element={<Work />}></Route>
      <Route path={'/contact'} element={<Contact />}></Route>
    </Routes>
    <Banner />
    <Logo />
    <Threeicon />
    <Latestwork />
    <Testimonial />
    <Login />
    </BrowserRouter>
    </>
  );
}

export default App;
