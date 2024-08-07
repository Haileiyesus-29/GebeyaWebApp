import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { useState } from 'react'
import Wrapper from './Wrapper'
import Auth from '../pages/Auth'
import useAuth from '../store/useAuth'
import { useQuery } from '@tanstack/react-query'

function Container() {
   const [isOpen, setIsOpen] = useState(false)
   const [showAuth, setShowAuth] = useState(false)
   const verify = useAuth(store => store.verify)
   const [navOpen, setNavOpen] = useState(false)

   useQuery({
      queryKey: ['auth'],
      queryFn: verify,
      staleTime: 1000 * 60 * 10,
      enabled: !!verify,
      refetchIntervalInBackground: true,
   })

   return (
      <>
         <Navbar
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            setShowAuth={setShowAuth}
            showAuth={showAuth}
            navOpen={navOpen}
            setNavOpen={setNavOpen}
         />
         <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
         <Auth showAuth={showAuth} setShowAuth={setShowAuth} />
         <Wrapper
            className={`${
               isOpen || showAuth || navOpen ? 'blur-sm brightness-75' : ''
            }`}
         >
            <Outlet />
         </Wrapper>
         <Footer
            className={`${
               isOpen || showAuth || navOpen ? 'blur-sm brightness-75' : ''
            }`}
         />
      </>
   )
}
export default Container
