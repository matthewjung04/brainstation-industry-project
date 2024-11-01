import './Tableau.scss'

function Tableau() {

  const loadTableau = () => {
    var divElement = document.getElementById('viz1730420415122');             
    var vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width='100%';
    vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
    console.log('working')
  }
 
  return (
    <>
      {/* <div>
        <tableau-viz id="tableauViz"       
          src='https://public.tableau.com/views/Book_amazon_test_filter/Sheet2?:language=en-US&publis[…]sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
        ></tableau-viz>
      </div> */}
      <button onClick={loadTableau}>click</button>
      <div className='tableauPlaceholder' id='viz1730420415122' onLoadCapture={loadTableau} style={{position: 'relative'}}>
        <noscript>
          <a href='#'>
            <img alt='Sheet 2 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book_amazon_test_filter&#47;Sheet2&#47;1_rss.png' style={{border: 'none'}}/>
          </a>
        </noscript>
        <object className='tableauViz' style={{width: 100 + '', height: 100 + ''}}>
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
      <script></script>
    </>
  )
}

export default Tableau;