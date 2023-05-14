/**
 * The router.
 */
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./components/blog/BlogPost";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/about", element: <About /> },
	{ path: "/projects", element: <Projects /> },
	{ path: "/blog", element: <Blog /> },
	{ path: "/blog/:postId", element: <BlogPost /> },
	{ path: "/contact", element: <Contact /> }
])