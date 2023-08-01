import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {NavBar} from './components/NavBar.js'
import { Home } from './components/Home.js';
import { Blog } from './components/Blog.js';
import'./styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
     
        <header className="App-header">
          <NavBar/>
        </header>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
