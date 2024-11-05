import ProsAndConsImage from '../../assets/images/pros-and-cons.png'
import './ConsumerSellerProsAndCons.scss'

function ConsumerSellerProsAndCons() {

  return (
    <section class='pros-and-cons'>
      <h1 class='pros-and-cons__title'>Consumer Seller Pros and Cons</h1>
      <img src={ProsAndConsImage} alt='pros and cons image' class='pros-and-cons__image'/>
      <div class='pros-and-cons__notes'>
        <h2 className='pros-and-cons__notes__title'>Notes</h2>
        <p className='pros-and-cons__notes__desc'>
          A sample of positve and negative words filtered out for sample Amazon items.
          The complete data can be viewed within the tableau dashboard section.
        </p>
      </div>
    </section>
  )
}

export default ConsumerSellerProsAndCons;