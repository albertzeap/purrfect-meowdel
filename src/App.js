import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {MeowNavBar} from './components/MeowNavBar.js'
import { Home } from './components/Home.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <MeowNavBar/>
        </header>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
