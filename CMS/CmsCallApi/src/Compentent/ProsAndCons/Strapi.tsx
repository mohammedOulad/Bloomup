import React from 'react'
import { Link } from 'react-router-dom';

function Strapi() {
    return (
        <div>
          <h1 style={{ textAlign:"center"}}>Strapi cms</h1>
          <div style={{ textAlign:"center"}}>
              <Link to="/strapi/fetch">apiData</Link>
          </div>
          <h1>pros</h1>
          <li>- User friendly</li>
          <li>- One user free  (3users = 7$/month)</li>
          <li>- Supports switching languages</li>
          <li>- Supports the frameworks Next.js, React.js</li>
          <li>- Gets frequent updates</li>
          <li>- **Preview Content**</li>
          <li>- **Built-in Backups & Restore**</li>
    
          <h1>cons</h1>
          <li>- 7$/month Built-in Backups & Restore</li>
          <li>- No Custom User roles</li>
          <li>- Not easy Quick start </li>
          <br />
          <br />

        </div>
      );
}

export default Strapi