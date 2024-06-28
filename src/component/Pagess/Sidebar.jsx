import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>
        <i className="fa-solid fa-xmark" />
      </button>
      <ul >
        <li>
          <Link to='/signup'>
            <button className='signUp_btn' onClick={onClose}>Signup</button>
          </Link>
          <Link to='/login'>
            <button className='signUp_btn' onClick={onClose}>Login</button>
          </Link>
        </li>
        <Link to='/Quizes' className='drop_li' onClick={onClose} >
          <li>Personality quiz</li>
        </Link>
        <Link to='/Create_perfume' className='drop_li' onClick={onClose}>
          <li>Create perfume</li>
        </Link>
        <li className="nav-item dropdown list_page1">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            All collection
          </a>
          <ul className="dropdown-menu drop_Menu menu2" aria-labelledby="navbarDarkDropdownMenuLink1">
            <Link to='/HimPage' className='drop_li' onClick={onClose}>
              <li>For Him</li>
            </Link>
            <Link to='/HerPage' className='drop_li' onClick={onClose}>
              <li>For Her</li>
            </Link>
            <Link to='/KidsPage' className='drop_li' onClick={onClose}>
              <li>For Kids</li>
            </Link>
          </ul>
        </li>
        <li className="nav-item dropdown list_page2">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our kits
          </a>
       <ul className="dropdown-menu drop_Menu" aria-labelledby="navbarDarkDropdownMenuLink2">
            <Link to='/TravelKit' className='drop_li' onClick={onClose}>
              <li>Travel kit</li>
            </Link>
            <Link to='/HimAndHerKit' className='drop_li' onClick={onClose}>
              <li>Him & her kit</li>
            </Link>
            <Link to='/FamilyKit' className='drop_li' onClick={onClose}>
              <li>Family kit</li>
            </Link>
            <Link to='/KidsKit' className='drop_li' onClick={onClose}>
              <li>Kid kit</li>
            </Link>
            <Link to='/ExploreKit' className='drop_li' onClick={onClose}>
              <li>Explore kit</li>
            </Link>
        </ul>
        </li>
        <li>Best sellers</li>   
        <Link to='/GiftCollection' className='drop_li' onClick={onClose}>
              <li>Gift Collection</li>
            </Link>  
        
       
        <li>DIY kit</li>
        <Link to='/Bulk' className='drop_li' onClick={onClose} >
          <li>Bulk ordering</li>
        </Link>
        <Link to='/Blogs' className='drop_li' onClick={onClose}>
          <li>Blogs</li>
        </Link>

      

      </ul>

    </div>
  );
};

export default Sidebar;
