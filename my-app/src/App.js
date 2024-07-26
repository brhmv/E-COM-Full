import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
import ShopCategory from './Pages/ShopCategory'
import men_banner from './Components/Assets/banner_men.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
import Admin from './Pages/Admin';


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory banner={men_banner} category='men' />} />
        <Route path='/women' element={<ShopCategory banner={women_banner} category='women' />} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kid' />} />

        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>

        <Route path='/cart' element={<Cart />} />

        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />

        <Route path='/admin/*' element={<Admin />} />

      </Routes>

    </div>
  );
}

export default App;