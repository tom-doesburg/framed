import React from "react";
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
    // <Route>
<div>
    <section className="app">
    <aside className="sidebar">
             <header className="header"><Link to="/">FRAMED</Link>
          
               <div>
                        <svg width="25" height="25">
                            <path d="M0,5 30,5" stroke="#fff" strokeWidth="3"/>
                            <path d="M0,14 30,14" stroke="#fff" strokeWidth="3"/>
                            <path d="M0,23 30,23" stroke="#fff" strokeWidth="3"/>
                        </svg>
                </div>
            </header>
<div className="sidebar-nav">
        <div className="navbar">
        <ul>
        <li>
        <Link to="/Frames"><i className="ion-ios-chatboxes-outline"></i>Frames</Link>
        <ul className="nav-flyout">
        <li>
        <Link to="/MyFrames"><i className="ion-ios-briefcase-outline"></i>My Frames</Link>
        </li>
        <li>
        <Link to="/Artists"><i className="ion-ios-flame-outline"></i>Artists</Link>
        </li>
        <li>
        <Link to="/Photographers"><i className="ion-ios-camera-outline"></i>Photographers</Link>
        </li>
        </ul>
        </li>
        <li>
        <a href="#"><i className="ion-ios-paper-outline"></i> <span className="">Frame List</span></a>
        <ul className="nav-flyout">
        <li>
        <a href="#"><i className="ion-android-star-outline"></i>Favourites</a>
        </li>
        <li>
        <a href="#"><i className="ion-ios-lightbulb-outline"></i>Inspiration</a>
        </li>
        <li>
        <a href="#"><i className="ion-ios-partlysunny-outline"></i>Landscapes</a>
        </li>
        </ul>
        </li>
        <li>
        <a href="#"><i className="ion-ios-settings"></i> <span className="">Edit Frame</span></a>
        <ul className="nav-flyout">
        <li>
        <a href="#"><i className="ion-ios-settings"></i>Crop</a>
        </li>
        <li>
        <a href="#"><i className="ion-ios-settings"></i>Contrast</a>
        </li>
        <li>
        <a href="#"><i className="ion-ios-settings"></i>Contrast</a>
        </li>
        <li>
        <a href="#"><i className="ion-ios-timer-outline"></i>Frame Time</a>
        </li>
        </ul>
        </li>
        <li>
        <a href="#"><i className="ion-ios-cog-outline"></i> <span className="">Settings</span></a>
        <ul className="nav-flyout">
        <li>
        <a href="#"><i className="ion-ios-locked-outline"></i>Account</a>
        </li>
        <li>
        <a href="#"><i className="ion-ios-navigate-outline"></i>Sharing</a>
        </li>
        </ul>
        </li>
        </ul>
        </div>
        </div>
    </aside>
    </section>
</div>

      // </Route>
    );
  }
}

export default Nav;
