import { useEffect } from 'react';
import { url } from '../../utils/utils.jsx'
import './ConsumerSellerTableau.scss'

function ConsumerSellerTableau() {

  useEffect(() => {
    var divElement = document.getElementById('viz1730583989071');                 
    var vizElement = divElement.getElementsByTagName('object')[0];                                    
    var scriptElement = document.createElement('script');                    
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
    vizElement.parentNode.insertBefore(scriptElement, vizElement);   
  },[])
 
  return (
    <section className='tableau'>
      <h1 className='tableau__title'>Tableau Dashboard</h1>
      <article className='tableau__dashboard'>
        <div id='viz1730583989071' style={{position: 'relative'}}>
          <noscript>
            <a href='#'><img alt='Dashboard 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;te&#47;test_test_17305772805390&#47;Dashboard1&#47;1_rss.png' style={{border: 'none'}} /></a>
          </noscript>
          <object className='tableauViz tableau-block'  style={{display: 'none'}}>
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
            <param name='embed_code_version' value='3' /> <param name='site_root' value='' />
            <param name='name' value='test_test_17305772805390&#47;Dashboard1' />
            <param name='tabs' value='no' /><param name='toolbar' value='yes' />
            <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;te&#47;test_test_17305772805390&#47;Dashboard1&#47;1.png' /> 
            <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' />
            <param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' />
            <param name='display_count' value='yes' /><param name='language' value='en-US' />
            <param name='filter' value='publish=yes' />
          </object>
        </div>  
      </article>
      <article className='tableau__notes'>
        <h2 className='tableau__notes__title'>Notes</h2>
        <p className='tableau__notes__desc'>
          A complete analysis of customer product reviews filtered by pros&cons, top reviews, and brand distribution. 
        </p>
        <p className='tableau__notes__desc'>
          To access the tableau source link
          <a href='https://public.tableau.com/app/profile/bhargav.devarapalli/viz/test_test_17305772805390/Dashboard1?publish=yes' target='_blank'>click here.</a>
        </p>
        <p className='tableau__notes__desc'>
          To access sample data
          <a href={`${url}/sample`} target='_blank'>click here.</a>
        </p>
      </article>
    </section>
  )
}

export default ConsumerSellerTableau;

              
             