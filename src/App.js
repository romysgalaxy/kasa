import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import About from './pages/About';
import NotFound from './pages/NotFound';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/:itemId" element={<Detail />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}