

import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Homepage from './Component/Homepage/Homepage';
import Pages from './Component/Pages/Pages';
import Payment from './Component/Payment/Payment';
import Submit from './Component/Submit/Submit';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Properties from './Component/Properties/Properties';
import Contact from './Component/Contact/Contact';


function App() {
  
  return (
    <>



        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Properties' element={<Properties />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Blog' element={<Blog />}></Route>
          <Route path='/Pages' element={<Pages />}></Route>
          <Route path='/Submit' element={<Submit />}></Route>
          <Route path='/Payment' element={<Payment />}></Route>
          
          

        </Routes>
        </BrowserRouter>

    
    




    
    
    
    
    
    
    
    
    </>
  );
}

export default App;
