import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../assets/logos/amazon-logo.svg'
import dropDownArrow from '../../assets/icons/arrow_drop_down.svg'
import './Navigation.scss'

function Navigation() {
  let [hasHovered, setHasHovered] = useState(false)

  const hoverEffect = (e) => {
    const menuID = e.target.id;

    if(menuID == 'consumer-seller-menu') {
      document.getElementById('consumer-seller-dropdown').style.display = 'block';
      setHasHovered(hasHovered=true);

    } else if(menuID == 'monitoring-dashboard-menu') {
      document.getElementById('consumer-seller-dropdown').style.display = 'none';
    }
  }

  const hoverExit = () => {
    
   
    document.getElementById('consumer-seller-dropdown').style.display = 'none';
  }

  return (
    <section className='header'>
      <Link to='/'><img src={logo} alt="logo-image" id='logo-img'/></Link>
      <h1 className='header__title'>Amazon Product Review Analysis</h1>
      <article className='header__nav'>
        <div className='header__nav__menu' onMouseOver={hoverEffect} onMouseLeave={hoverExit}>
          <Link 
            to='/consumer-seller'
            reloadDocument
            className='header__nav__menu__item'
            id='consumer-seller-menu' 
             >
            Consumers & Sellers<img src={dropDownArrow} alt='drop_arrow_icon'/>
          </Link>
          <div className='header__nav__menu__item__dropDown' id='consumer-seller-dropdown'>
            <Link
              to='/consumer-seller/tableau-dashboard'
              className='header__nav__menu__item__dropDown__items'>
              Tableau Dashboard
            </Link>
            <Link
              to='/consumer-seller/pros-and-cons'
              className='header__nav__menu__item__dropDown__items'>
              Pros and Cons
            </Link>
            <Link
              to='/consumer-seller/top-reviews'
              className='header__nav__menu__item__dropDown__items'>
              Top Reviews
            </Link>
          </div>
        </div>
          <Link 
            to='/monitoring-dashboard'
            reloadDocument
            className='header__nav__menu__item'
            id='monitoring-dashboard-menu'
            onMouseOver={hoverEffect}>
            Monitoring Dashboard
          </Link>
      </article>
    </section>
  )
}

export default Navigation;