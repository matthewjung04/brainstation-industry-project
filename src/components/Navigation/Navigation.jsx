import { Link } from 'react-router-dom'
import logo from '../../assets/logos/amazon-logo.svg'
import dropDownArrow from '../../assets/icons/arrow_drop_down.svg'
import './Navigation.scss'

function Navigation() {

  const hoverEffect = (e) => {
    const menuID = e.target.id;

    if(menuID == 'consumer-seller-menu') {
      document.getElementById('consumer-seller-dropdown').style.display = 'block';
      document.getElementById('product-inspector-dropdown').style.display = 'none';

    } else if(menuID == 'product-inspector-menu') {
      document.getElementById('consumer-seller-dropdown').style.display = 'none';
      document.getElementById('product-inspector-dropdown').style.display = 'block';
    }
  }

  const hoverExit = () => {
    document.getElementById('consumer-seller-dropdown').style.display = 'none';
    document.getElementById('product-inspector-dropdown').style.display = 'none';
  }

  return (
    <section className='header'>
      <Link to='/'><img src={logo} alt="logo-image" id='logo-img'/></Link>
      <h1 className='header__title'>Amazon Product Review Analysis</h1>
      <article className='header__nav'>
        <div className='header__nav__menu'>
          <Link 
            to='/consumer-seller' 
            className='header__nav__menu__item'
            id='consumer-seller-menu' 
            onMouseOver={hoverEffect}>
            Consumers & Sellers<img src={dropDownArrow} alt='drop_arrow_icon'/>
          </Link>
          <div className='header__nav__menu__item__dropDown' id='consumer-seller-dropdown' onMouseLeave={hoverExit}>
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
        <div className='header__nav__menu'> 
          <Link 
            to='/product-inspector'
            className='header__nav__menu__item'
            id='product-inspector-menu'
            onMouseOver={hoverEffect}>
            Product Inspector<img src={dropDownArrow} alt='drop_arrow_icon'/>
          </Link>
          <div className='header__nav__menu__item__dropDown' id='product-inspector-dropdown' onMouseLeave={hoverExit}>
            <Link 
              to='/product-inspector/tableau-dashboard'
              className='header__nav__menu__item__dropDown__items'>
              Tableau Dashboard
            </Link>
            <Link
              to='/product-inspector/pros-and-cons'
              className='header__nav__menu__item__dropDown__items'>
              Pros and Cons
            </Link>
            <Link
              to='/product-inspector/top-reviews'
              className='header__nav__menu__item__dropDown__items'>
              Top Reviews
            </Link>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Navigation;