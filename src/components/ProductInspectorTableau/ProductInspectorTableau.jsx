import { useEffect } from 'react';
import './ProductInspectorTableau.scss'

function ProductInspectorTableau() {

  useEffect(() => {
    var divElement = document.getElementById('viz1730420415122');             
    var vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width=100+'%';
    vizElement.style.height=75+'vh';
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  },[])
 
  return (
    <>
      <div className='tableauPlaceholder' id='viz1730420415122' style={{position: 'relative'}}>
        <noscript>
          <a href='#'>
            <img alt='Sheet 2' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book_amazon_test_filter&#47;Sheet2&#47;1_rss.png' style={{border: 'none'}}/>
          </a>
        </noscript>
        <object className='tableauViz' style={{width: 100 + '%', height: 50 + '%'}}>
          <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
          <param name='embed_code_version' value='3' />
          <param name='site_root' value='' />
          <param name='name' value='Book_amazon_test_filter&#47;Sheet2' />
          <param name='tabs' value='no' />
          <param name='toolbar' value='yes' />
          <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book_amazon_test_filter&#47;Sheet2&#47;1.png' />
          <param name='animate_transition' value='yes' />
          <param name='display_static_image' value='yes' />
          <param name='display_spinner' value='yes' />
          <param name='display_overlay' value='yes' />
          <param name='display_count' value='yes' />
          <param name='language' value='en-US' />
          <param name='filter' value='publish=yes' />
        </object>
      </div>
    </>
  )
}

export default ProductInspectorTableau;