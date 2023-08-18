import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './views/Layout';
import "./App.css"
import Home from './views/home';
import ListCategories from './views/ListCategories';


function App() {
  return (
    <div className="App">
         <BrowserRouter>
         <Routes>
          <Route path='/' element= {<Home/>}>
              <Route path='/' element= {<Layout/>}></Route>
              <Route path='/categories' element= {<ListCategories/>}></Route>
          </Route>
         </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
