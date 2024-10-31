import { useState } from 'react';
import { Link } from 'react-router-dom';
import { description } from '../../utils/utils';
import './HomePage.scss'

function HomePage() {
  let [desc, setDesc] = useState('');
  
  const hoverHandler = (e) => {
    const id = e.target.id;
    var popup = document.getElementById('modal')
    console.log(popup)

    if(id == 'selection--consumer') {
      const descID = 'consumer';
      const popupDesc = description.find((desc) => desc.id == descID);
      
      setDesc(popupDesc.description);
      popup.style.marginTop = "-4rem";

    } else if(id == 'selection--seller') {
      const descID = 'seller';
      const popupDesc = description.find((desc) => desc.id == descID);

      setDesc(popupDesc.description);
      popup.style.marginTop = "6rem";

    } else if(id == 'selection--product-inspector') {
      const descID = 'product-inspector';
      const popupDesc = description.find((desc) => desc.id == descID);

      setDesc(popupDesc.description);
      popup.style.marginTop = "16rem";
    }
  }

  const hoverExitHandler = () => {
    setDesc('');
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
            <p className='homepage__main__buttons__text--consumer'>{description[0].description}</p>
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
            <p className='homepage__main__buttons__text--seller'>{description[1].description}</p>
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
            <p className='homepage__main__buttons__text--product-inspector'>{description[2].description}</p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default HomePage;