import React  from 'react';
import { useNavigate } from 'react-router-dom';

// import cartIcon from '../../assets/Icon-04 1.svg';
// import profileIcon from '../../assets/Icon-03 1.svg';
// import searchIcon from '../../assets/Icon-02 1.svg';
// import logo from '../../assets/logo.png'
import {NavLink} from 'react-router-dom';
import {Container, Row} from 'reactstrap';
//import Product from '../Product/product';


const navlinks = [
  {
    path:'/New-Recipe',
    diplay:'New Recipe'
  },
  {
    path:'/Saved-Recipe',
    diplay:'Saved Recipe'
  },

]

function Navbar() {


  
  return (
    <div>
    <header className='header'>
      <Container>
        <Row>
          <div className='nav_wrapper'>
            <div className='logo'>
              <img src={logo} alt='logo' />
            </div>
            <div className='navigation'>
              <ul className='menu'>
               {navlinks.map((item,index) => (
                <li className='nav_item' key={index}>
                  <NavLink to={item.path} className={(navClass) =>navClass.isActive ? 'nav_active' : ''}>{item.diplay}</NavLink>
                </li>
               ))}
              </ul>
            </div>
{/* 
            <div className='nav_icons'>
              <span className='search_icon'>
              <img src={searchIcon} alt='searchIcon' />
              </span>
              <span className='profileIcon'>
              <img src={profileIcon} alt='profileIcon' />
               </span>
            </div> */}
          </div>
            
          
        </Row>
      </Container>
    </header>
    
    </div>
  )
}

export default Navbar;