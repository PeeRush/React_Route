import React from 'react'
import{Link} from 'react-router-dom'
function Header() {
  return (
    <div>
            {/* <nav> 
             <ul>
             <li><a href='/'>Home</a></li>
             <li><a href='/services'>Services</a></li>
             <li><a href='/contacts'>Contacts</a></li>
             </ul>
                </nav> */}

  
    

        <nav> 
            <ul>
                <li><Link to='/'>Home</Link></li>

                <li>
                    <Link to={'/contacts'}>Contacts</Link>
                  </li>

                <li>
                <Link to={'/services'}>Services</Link>
                    
                </li>
                </ul>
            </nav>

    </div>

  )
}

export default Header