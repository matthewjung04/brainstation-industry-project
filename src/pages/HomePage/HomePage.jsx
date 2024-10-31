import { Link } from 'react-router-dom';
import './HomePage.scss'

function HomePage() {
  return (
    <section className='homepage'>
      <h1 className='homepage__title'>Please choose one of the following:</h1>
      <div className='homepage__buttons'>
        <Link to='/consumer'><button type='button' id='selection'>Consumer</button></Link>
        <Link to='/seller'><button type='button' id='selection'>Seller</button></Link>
        <Link to='/product-inspector'><button type='button' id='selection'>Product Inspector</button></Link>
      </div>
    </section>
  )
}

export default HomePage;