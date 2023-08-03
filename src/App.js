import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {NavBar} from './components/NavBar.js'
import { Home } from './components/Home.js';
import { BlogList } from './components/BlogList.js';
import'./styles/App.css'
import { BlogPost } from './components/BlogPost.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
     
        <header className="App-header">
          <NavBar/>
        </header>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/blogs" element={<BlogList/>}/>
            <Route path="/blog/:id" element={<BlogPost/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
