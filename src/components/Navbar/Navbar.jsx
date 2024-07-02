
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { Container, Row } from 'reactstrap';
// import '../Styles/Navbar.css';

// const navlinks = [
//   {
//     path: '/New-Recipe',
//     display: 'New Recipe'
//   },
//   {
//     path: '/Saved-Recipe',
//     display: 'Saved Recipe'
//   },
// ];

// const Navbar = ({ onLogout }) => {
//   return (
//     <header className="header">
//       <Container>
//         <Row>
//           <div className="nav_wrapper">
//             <div className="logo">MyApp</div>
//             <div className="navigation">
//               <ul className="menu">
//                 {navlinks.map((item, index) => (
//                   <li className="nav_item" key={index}>
//                     <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav_active' : ''}>
//                       {item.display}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <button className="logout_button" onClick={onLogout}>Logout</button>
//           </div>
//         </Row>
//       </Container>
//     </header>
//   );
// };

// export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import '../Styles/Navbar.css';

const navlinks = [
  {
    path: '/New-Recipe',
    display: 'New Recipe'
  },
  {
    path: '/Saved-Recipe',
    display: 'Saved Recipe'
  },
];

const Navbar = ({ onLogout }) => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">MyApp</div>
            <div className="nav_links_logout">
              <div className="navigation">
                <ul className="menu">
                  {navlinks.map((item, index) => (
                    <li className="nav_item" key={index}>
                      <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav_active' : ''}>
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="logout_button" onClick={onLogout}>Logout</button>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Navbar;
   