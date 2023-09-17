const Navbar = () => {
  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/products', name: 'Products' },
    { id: 4, path: '/contact', name: 'Contact' },
    { id: 5, path: '*', name: 'NotFound' }
  ];
  





  return (
    <nav>
      <ul className="md:flex"> 
        {
          routes.map((route,index) => <ol className="mr-8" key={route.id}><a href="{route.path}">{index+1}. {route.name}</a></ol>)
        }
        </ul> 
    </nav>
  );
};

export default Navbar;