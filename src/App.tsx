import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Components from './pages/Components'
import Home from './pages/Home'
import BasicLayout from './layouts/BasicLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BasicLayout />}>
      <Route index element={<Home />} />
      <Route path="components" element={<Components />} />
    </Route>
  )
)
  

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
