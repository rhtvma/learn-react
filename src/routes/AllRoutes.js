import { Routes, Route } from "react-router-dom"
import Blogs from "../pages/Blogs"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import Layout from "../pages/Layout"
import PageNotFound from "../pages/PageNotFound"

function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="layout" element={<Layout />} />
                <Route path="contact" element={<Contact apiPath="contact" />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default AllRoutes