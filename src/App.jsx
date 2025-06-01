import { Fragment } from "react";
import Home from "./pages/Home";
// import Footer from "./component/Footer/Footer";
import "./index.css";
import { createBrowserRouter, createHashRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Contact from "./component/contact/Contact";
import About from "./component/About/About";
import Services from "./component/Services/Services";
import Blog from "./component/Blog/Blog";


const routes =createHashRouter(createRoutesFromElements(

  <Route path="/" element={<Layout/>}>
    <Route index path="/" element={<Home/>}/>
    <Route index path="/contact" element={<Contact/>}/>
    <Route index path="/about" element={<About/>}/>
    <Route index path="/services" element={<Services/>}/>
    <Route index path="/blog" element={<Blog/>}/>
    
  </Route> 
))
const App = () => {
  return (
    <Fragment>
      <RouterProvider router={routes} />
    </Fragment>

  )
}

export default App
