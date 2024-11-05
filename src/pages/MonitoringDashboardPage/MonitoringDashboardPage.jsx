import { useEffect } from 'react';
import './MonitoringDashboardPage.scss'

function MonitoringDashboardPage() {

  useEffect(() => {
    var divElement = document.getElementById('viz1730579719385');
    var vizElement = divElement.getElementsByTagName('object')[0];

    if ( divElement.offsetWidth > 800 ) { 
      vizElement.style.width='97%';
      vizElement.style.height=(divElement.offsetWidth*0.5)+'px';
    } else if ( divElement.offsetWidth > 500 ) { 
      vizElement.style.width='97%';
      vizElement.style.height=(divElement.offsetWidth*0.5)+'px';
    } else { 
      vizElement.style.width='100%';
      vizElement.style.height='3027px';
    }

    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  },[])

  return (
    <section className='monitoring-dashboard'>
      <h1 className='monitoring-dashboard__title'>Monitoring Dashboard</h1>
      <div >
        <div className='tableauPlaceholder' id='viz1730579719385' style={{position: 'relative'}}>
          <noscript>
            <a href='#'>
              <img alt='Dashboard 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Am&#47;Amazon_17213278321810&#47;Dashboard1&#47;1_rss.png' style={{border: 'none'}} />
            </a>
          </noscript>
          <object className='tableauViz'  style={{display: 'none'}}>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
            <param name='embed_code_version' value='3' />
            <param name='site_root' value='' />
            <param name='name' value='Amazon_17213278321810&#47;Dashboard1' />
            <param name='tabs' value='no' />
            <param name='toolbar' value='yes' />
            <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Am&#47;Amazon_17213278321810&#47;Dashboard1&#47;1.png' />
            <param name='animate_transition' value='yes' />
            <param name='display_static_image' value='yes' />
            <param name='display_spinner' value='yes' />
            <param name='display_overlay' value='yes' />
            <param name='display_count' value='yes' />
            <param name='language' value='en-US' />
          </object>
        </div> 
      </div>
      <div className='monitoring-dashboard__notes'>
        <h2 className='monitoring-dashboard__notes__title'>Notes</h2>
        <p>
          This tableau was used a reference for formatting and organizing the visual data in out tableau.
        </p>
        <p className='monitoring-dashboard__notes__desc'>
          To access the reference tableau link
          <a href='https://public.tableau.com/app/profile/srikanth.chandrasekaran/viz/Amazon_17213278321810/Dashboard1' target="_blank">
            click here.
          </a>
        </p>
      </div>
    </section>
  )
}

              



export default MonitoringDashboardPage;