import { RouterProvider } from 'react-router-dom'
import router from './router'
import Navbar from './ui/Navbar'
import Footer from './components/Footer'

function App() {
   return (
      <>
         <Navbar />
         <RouterProvider router={router} />
         <Footer />
      </>
   )
}

export default App
