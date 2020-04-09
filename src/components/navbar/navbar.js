import React from "react";
import {Link} from 'react-router-dom';
class Navbar extends React.Component{
    render() {
        return(
            <div>
                <nav className="blue darken-3">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo center">GPTW Task Tracker2.0</a>
                      
                        {/* <a data-activates="main-menu" className="button-collapse show-on-large"> */}
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger left show-on-large"> <i className="fa fa-bars"></i>     
                        </a>
                        <ul className="right">
                            <li>
                                <Link to="#">
                                    <i className="fa fa-sign-out" ></i>
                                    Logout
                                </Link>
                            </li>
                        </ul>
        
                   <ul className="sidenav" id="mobile-demo">
                    <li>
                        <Link to="/"><i className="fa fa-check-circle"></i>
                        Attendance</Link>
                    </li>
                    <li>
                        <Link to="/task"><i className="fa fa-tasks"></i>
                       Task Tracker</Link>
                    </li>
                </ul>
            </div>
            </nav>
         </div>
        );
    }
}
       
export default Navbar;