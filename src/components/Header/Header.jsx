import React from 'react'
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <header>
          <div id="company">
            <img src={logo} alt="Academic Words Logo" id="logo"/>
            <div id="companyName">Academic Words</div>
          </div>
        </header>
    )
}

export default Header;