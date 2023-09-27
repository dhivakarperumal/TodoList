import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Create from './Components/Create';
import Read from  './Components/Read';
import Update from './Components/Update'
import './App.css'
import Footer from './Footer/Footer';
import SingUp from './Components/SingUp';


function App() {
  return (
    <>
    <Navbars/>
      <div class="App">

        <h2 className='mb-3'>TODO LIST</h2>
      <Routes>
         <Route exact path='/' element={<Create/>}>Create</Route>
         <Route exac path='/read' element={<Read/>}>Read</Route>
         <Route exac path='/update' element={<Update/>}>Updated</Route>
         <Route exac path='' element={<SingUp/>}>Updated</Route>
     </Routes>
     
     </div>
     <Footer/>
    </>
  );
}

export default App;
