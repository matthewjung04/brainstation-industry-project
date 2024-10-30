import './MainPage.scss'

function MainPage() {
  return (
    <>
      <h1>Main Page</h1>
      <div>
        <tableau-viz id="tableauViz"       
          src='https://public.tableau.com/views/VGContest_SuperSampleSuperstore_RyanSleeper/SuperDescriptive?:embed=y&:sid=&:redirect=auth&:embed_code_version=3&:loadOrderID=0&:display_count=y&:origin=viz_share_link'
          hide-tabs
        ></tableau-viz>
      </div>
    </>
  )
}

export default MainPage;