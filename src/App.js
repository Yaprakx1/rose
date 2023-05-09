import MainPage from './pages/mainPage';
import Products from './pages/products';
import Header from './components/header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css';
import Bookdetail from './pages/bookdetail';
import UndefinedPage from './pages/undefinedPage';


function App() {
  return (
    <BrowserRouter >
       <Header/>   
    <Routes>
      <Route path="/" element={<MainPage/>} /> 
      <Route path="/books" element={<Products/>} />
      <Route path="/books/:bookId" element={<Bookdetail/>} />
      <Route path="*" element={<UndefinedPage/> }/> 

      </Routes>
  
    </BrowserRouter>
  );
}

export default App;
