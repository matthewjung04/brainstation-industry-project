import TopReviewsOne from '../../assets/images/top-reviews.png'
import TopReviewsTwo from '../../assets/images/top-reviews-02.png'
import './ConsumerSellerTopReviews.scss'

function ConsumerSellerTopReviews() {

  return (
    <section className='top-reviews'>
      <h1 className='top-reviews__title'>Consumer Seller Top Reviews</h1>
      <div className='top-reviews__images'>
        <img src={TopReviewsOne} alt='top review photo 1' className='top-reviews__images--one'/>
        <img src={TopReviewsTwo} alt='top review photo 2' className='top-reviews__images--two'/>
      </div>
      <div class='top-reviews__notes'>
        <h2 className='top-reviews__notes__title'>Notes</h2>
        <p className='top-reviews__notes__desc'>
          A sample of positve and negative words filtered out for sample Amazon items.
          The complete data can be viewed within the tableau dashboard section.
        </p>
      </div>
    </section>
  )
}

export default ConsumerSellerTopReviews;