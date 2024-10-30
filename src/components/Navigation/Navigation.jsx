import { Link } from 'react-router-dom'
import logo from '../../assets/logos/amazon-logo.svg'
import dropDownMenu from '../../assets/icons/dropdown-menu-24px.svg'
import './Navigation.scss'

function Navigation() {
  return (
    <section className='header'>
      <div className='header__nav'>
        <button type='button' className='header__nav__dropdown'><img src={dropDownMenu} alt="menu-button"/></button>
        <Link to='/'><img src={logo} alt="logo-image"/></Link>
      </div>
      <h1 className='header__title'>Customer Review Analysis</h1>
    </section>
  )
}

export default Navigation;