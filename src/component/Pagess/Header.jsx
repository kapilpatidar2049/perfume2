import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from '../Pagess/Sidebar';
import logo from '../../assets/logowhitenew.png';
import '../Css/Header.css';

const Header = () => {
  const [userName, setUserName] = useState("");  
  const [name, setName] = useState("");  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isCreatePerfumePage = pathname === '/Create_perfume';
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const storedFirstName = localStorage.getItem('name');
    const storedIsAuthenticated = localStorage.getItem('isAuthenticated');
    const token = localStorage.getItem("token");

    if (storedIsAuthenticated === 'true' && storedFirstName) {
      setFirstName(storedFirstName);
      setIsAuthenticated(true);
      setName(storedFirstName);
    }

    if (token) {
      setIsAuthenticated(true);
      setUserName(token);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOutsideClick = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('name');  
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <>
      <div className="container mt-0">
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <div className={`stickk ${sticky ? 'navbar sticky' : ''}`}>
          <div className="row justify-content-between header_row">
            <div className="col-lg-3 col-3 col-sm-4 menu-txt">
              <i onClick={toggleSidebar} className="fa-solid fa-bars menu-btn" />
              <div className='menuu'>MENU</div>
            </div>
            <div className="col-lg-3 col-3 col-sm-3 ">
              <Link to="/" className="nav-link">
                <img src={logo} alt="Home" className="header_logo" />
              </Link>
            </div>
            <div className="col-lg-5  col-5 col-sm-5 ">
              <Link to="/Create_perfume" className="nav-link2">
                <button className="nav-btn">Create Your Perfume</button>
              </Link> 
              <Link className='search-icon'>
                <i className="fa-solid fa-magnifying-glass serch_ICON" />
              </Link>
              <Link to='/Addcart' className='search-icon2'>
              <i className="fa-solid fa-cart-shopping serch_ICON" />
            </Link>
            </div>
          </div>
        </div>
      </div>
      {/**  <div>
      //   {isAuthenticated ? (
      //     <div>
      //       <Link to={`/loginDashboard?firstName=${firstName}&isAuthenticated=true`}>
      //         <button className="menu1" style={{ fontSize: '17px' }}>
      //           Welcome, {localStorage.getItem('name')} <i className="fa-solid fa-user" style={{ fontSize: '25px' }} />
      //         </button>
      //       </Link>
      //       <button className="menu1" onClick={logout}>
      //         <i className="fa-solid fa-right-from-bracket" />
      //       </button>
      //     </div>
      //   ) : (
      //     <Link to="/signup">
      //       <button className="menu1">
      //         <i className="fa-solid fa-user" />
      //       </button>
      //     </Link>
      //   )}
      //   <Link to='/AddCart'>
      //     <button className="menu1">
      //       <i className="fa-solid fa-cart-shopping" />
      //     </button>
      //   </Link>
       </div>*/}
    </>
  )
}

export default Header;
