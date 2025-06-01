import "react";
import { Fragment } from "react";
import Navbars from "../navbar/Navbars";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
// import Home from "../../pages/Home";

const Layout = ()=>{
    return(
        <Fragment>
            <Navbars/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Layout;