import logo from './talenta-share.jpg';
import './App.css';

//importamos los componentes
import CompShowBlogs from './blog/ShowBlogs';
import CompEditBlog from './blog/EditBlog';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logotalenta">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowBlogs/>} />
          <Route path='/edit/:id' element={ <CompEditBlog />} />
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
