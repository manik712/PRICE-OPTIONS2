import { useState } from "react";
import Link from "../Link/Link";
import {ImMenu} from 'react-icons/im';
import {RiPresentationFill } from "react-icons/ri";
const Navbar = () => {
  const[open , setOpen] = useState(false)
  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/products', name: 'Products' },
    { id: 4, path: '/contact', name: 'Contact' },
    { id: 5, path: '*', name: 'NotFound' }
  ];
  





  return (
    <nav className="p-6">
    <div  className="md:hidden " onClick={() => setOpen(!open)}>

      {
        open === true ? <RiPresentationFill></RiPresentationFill> : <ImMenu className=""></ImMenu> 
      }
    
    </div>
      <ul className={`md:flex absolute duration-700 md:static px-3 ${open ? 'top-16' : '-top-60'} shadow-lg`}> 
        {
          routes.map((route, index) => <Link key={route.id} index={index}  route={route}></Link>)
        }
        </ul> 
    </nav>
  );
};

export default Navbar;