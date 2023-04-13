import {
    createBrowserRouter, Route, createRoutesFromElements, RouterProvider
} from "react-router-dom";
import "./App.css"
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import HelpLayouts from "./layouts/HelpLayouts";
import faq from "./help/Faq";
import Faq from "./help/Faq";
import Contact from "./help/Contact";

// const router = createBrowserRouter(createRoutesFromElements(<Route element={<RootLayout/>} path="/">
//     <Route path="/" element={<Home/>}/>
//     <Route path="about" element={<About/>}/>
// </Route>))
// var App = () => {
//     return (
//         <RouterProvider router={router}/>
//     );
// }

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="help" element={<HelpLayouts/>}>
                <Route path="faq" element={<Faq/>}/>
                <Route path="contact" element = {<Contact/>}/>
            </Route>
        </Route>
    )
)

const App = ()=>{
    return(
        <RouterProvider router={router}/>
    )
}
export default App
