import { Link } from 'react-router-dom';
import { description } from '../../utils/utils';
import cartoon from '../../assets/images/survey-cartoon.jpg'
import './HomePage.scss'

function HomePage() {  
  const hoverHandler = (e) => {
    const id = e.target.id;

    if(id == 'selection--consumer') {
      document.getElementById('consumer').style.display = 'block';

    } else if(id == 'selection--monitoring-dashboard') {
      document.getElementById('monitoring-dashboard').style.display = 'block';
    }
  }

  const hoverExitHandler = () => {
    document.getElementById('consumer').style.display = 'none';
    document.getElementById('monitoring-dashboard').style.display = 'none';
  }
  
  return (
    <section className='homepage'>
      <article className='homepage__main'>
        <h1 className='homepage__main__title'><sup>1</sup>Please choose one of the following:</h1>
        <div className='homepage__main__buttons'>
          <div className='homepage__main__buttons--consumer'>
            <Link to='/consumer-seller'>
              <button 
                type='button' 
                id='selection--consumer'
                onMouseOver={hoverHandler}
                onMouseOut={hoverExitHandler}
              >Consumers & Sellers</button>
            </Link>
            <p className='homepage__main__buttons__text--consumer' id='consumer'>{description[0].description}</p>
          </div>
          <div className='homepage__main__buttons--monitoring-dashboard'>
            <Link to='/monitoring-dashboard' id='links--monitoring-dashboard'>
              <button 
                type='button'
                id='selection--monitoring-dashboard'
                onMouseOver={hoverHandler}
                onMouseOut={hoverExitHandler}
              >Monitoring Dashboard</button>
            </Link>
            <p className='homepage__main__buttons__text--monitoring-dashboard' id='monitoring-dashboard'>{description[1].description}</p>
          </div>
        </div>
        <p className='footnote'><sup>1</sup>This webapp is only a demonstration and will have limited user selections</p>
        <img src={cartoon} alt='cartoon image' id='cartoon'/>
      </article>
    </section>
  )
}

export default HomePage;