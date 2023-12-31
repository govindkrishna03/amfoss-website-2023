import {BrowserRouter,Routes,Route} from "react-router-dom";
import Club from "./components/lifeatclub";
import Home from "./components/home";
import About from "./components/about";
import Members from "./components/members";


function App() {
  return  <BrowserRouter>

  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/members" element={<Members/>}/>
<Route path="/lifeinclub" element={<Club/>}/>


  </Routes>
  </BrowserRouter>

}

export default App;
