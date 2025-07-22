import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MainComponent from "./MainComponent";
import HomeComponent from './HomeComponent';
import NavBar from './NavBar';
import FormComponent from './FormComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <NavBar/>
          <Routes>
              <Route path="/" element={<HomeComponent/>}></Route>
              <Route path='/main' element={<MainComponent/>}></Route>
              <Route path='/form' element={<FormComponent/>}></Route>
          </Routes>
          </BrowserRouter>
      {/* <>Hi</> */}
    </div>
  );
}

export default App;
