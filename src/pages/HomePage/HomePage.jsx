import { useState } from 'react';
import { Link } from 'react-router-dom';
import { description } from '../../utils/utils';
import './HomePage.scss'

function HomePage() {  
  const hoverHandler = (e) => {
    const id = e.target.id;

    if(id == 'selection--consumer') {
      document.getElementById('consumer').style.display = 'block';

    } else if(id == 'selection--seller') {
      document.getElementById('seller').style.display = 'block';

    } else if(id == 'selection--product-inspector') {
      document.getElementById('product-inspector').style.display = 'block';
    }
  }

  const hoverExitHandler = () => {
    document.getElementById('consumer').style.display = 'none';
    document.getElementById('seller').style.display = 'none';
    document.getElementById('product-inspector').style.display = 'none';
  }
  
  return (
    <section className='homepage'>
      <article className='homepage__main'>
        <h1 className='homepage__main__title'>Please choose one of the following:</h1>
        <div className='homepage__main__buttons'>
          <div className='homepage__main__buttons--consumer'>
            <Link to='/consumer'>
              <button 
                type='button' 
                id='selection--consumer'
                onMouseOver={hoverHandler}
                onMouseOut={hoverExitHandler}
              >Consumer</button>
            </Link>
            <p className='homepage__main__buttons__text--consumer' id='consumer'>{description[0].description}</p>
          </div>
          <div className='homepage__main__buttons--seller'>
            <Link to='/seller'>
              <button 
                type='button' 
                id='selection--seller'
                onMouseOver={hoverHandler}
                onMouseOut={hoverExitHandler}
              >Seller</button>
            </Link>
            <p className='homepage__main__buttons__text--seller' id='seller'>{description[1].description}</p>
          </div>
          <div className='homepage__main__buttons--product-inspector'>
            <Link to='/product-inspector' id='links--product-inspector'>
              <button 
                type='button'
                id='selection--product-inspector'
                onMouseOver={hoverHandler}
                onMouseOut={hoverExitHandler}
              >Product Inspector</button>
            </Link>
            <p className='homepage__main__buttons__text--product-inspector' id='product-inspector'>{description[2].description}</p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default HomePage;