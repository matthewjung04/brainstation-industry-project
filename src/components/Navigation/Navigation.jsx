import { Link } from 'react-router-dom'
import logo from '../../assets/logos/amazon-logo.svg'
import dropDownArrow from '../../assets/icons/arrow_drop_down.svg'
import './Navigation.scss'

function Navigation() {
  return (
    <section className='header'>
      <Link to='/'><img src={logo} alt="logo-image"/></Link>
      <h1 className='header__title'>Amazon Product Review Analysis</h1>
      <div className='header__nav'>
        <Link to='/consumer-seller' className='header__nav__item'>
          Consumers & Sellers<img src={dropDownArrow} alt='drop_arrow_icon'/>
        </Link>
        <Link to='/product-inspector' className='header__nav__item'>
          Product Inspector<img src={dropDownArrow} alt='drop_arrow_icon'/>
        </Link>
      </div>
    </section>
  )
}

export default Navigation;