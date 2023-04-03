import { useState } from "react"
import Best from "./best"
import Categories from "./categories"
import Footer from "./footer"
import Form from "./form"
import Home from "./home"
import Ideas from "./ideas"
import Loader from "./loader"
import Navbar from "./navbar"
import Popular from "./popular"
import Search from "./search"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  setTimeout(() => {
    setIsLoading(false)
  }, 3000);
  return isLoading ? <Loader/> : (
    <div className="max-w-[1440px] mx-auto">
        <Navbar/>
        <Home/>
        <Categories/>
        <Popular/>
        <Best/>
        <Ideas/>
        <Search/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default App