import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
function Routing() {
    
        return(
            <div>
              <BrowserRouter>
              <Navbar/>
              <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/About" element= {<About/>}/>
                <Route path = "/Blog" element= {<Blog/>}/>
                <Route path = "/Contact" element= {<Contact/>}/>
                
              </Routes>
              </BrowserRouter>
            </div>
        )
    
}
export default Routing