import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <ul style={{display:"flex", flexDirection: "row"}}>
        <li style={{padding: 30}}>
            <Link to="/"> home</Link>
          </li>
          <li style={{padding: 30}}>
            <Link to="/strapi"> Strapi</Link>
          </li>
          <li style={{padding: 30}}>
            <Link to="/prismic"> Prismic</Link>
          </li>
          <li style={{padding: 30}}>
            <Link to="/contentful"> Contentful</Link>
          </li>
          <li style={{padding: 30}}>
            <Link to="/KeystoneJs"> KeystoneJs</Link>
          </li>
          <li style={{padding: 30}}>
            <Link to="/concrete"> Concrete</Link>
          </li>
          <li style={{padding: 30}}>
            <Link to="/ghost"> Ghost</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
