import Header from "./Header"
// import {Outlet} from "react-router-dom"
import  BuildUp from "../components/buildUp"

const Layout = ()=>{
    return(
        <div>
            <Header/>
            <BuildUp/>
        </div>
    )
}

export default Layout