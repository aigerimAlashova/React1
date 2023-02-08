import React from 'react'
import './header.css'
import apple from '../../assets/apple.svg'
const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <nav className='header__nav'>
                <h1 className='header__title'>
                    <img src={apple} alt='' className='img'/>
                </h1>
                <ul className='header__menu'>
                    <li className='header__item'>Products</li>
                    <li className='header__item'>Rooms</li>
                    <li className='header__item'>Contacts us</li>
                </ul>

            </nav>
        </div>
    </header>
  )
}

export default Header


