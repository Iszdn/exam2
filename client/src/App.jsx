
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage';
import AddPage from './Pages/AddPage';
import Basket from './Pages/Basket';
import Wish from './Pages/Wish';
import Details from './Pages/Details';
function App() {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>

        <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/add' element={<AddPage/>}/>
      <Route path='/basket' element={<Basket/>}/>
      <Route path='/wish' element={<Wish/>}/>
      <Route path='/:id' element={<Details/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </HelmetProvider>
  
  )
}

export default App
