
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import PerfumeImages from "./components/PerfumeImages"
import About from "./components/About"
import Footer from "./components/Footer"

function App()
{
    return(<>                                                                                                                                                         
        <Navbar></Navbar>
        <Search></Search>
        <PerfumeImages></PerfumeImages>
        <About></About>
        <Footer></Footer>
      </>) //<> this is called fragment using empty tag which makes the node version lighter
      
}

export default App