import { BrowserRouter } from "react-router-dom"
import {About,Contact,Experience,Home,Navbar,Tech} from "./components"



const App = () =>{
  return(
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
<div className="bg-hero-pattern bg-cover bg-norepeat bg-center">
<Navbar/>
<Home/>
</div>
    </div>
    </BrowserRouter>
  )
}
export default App