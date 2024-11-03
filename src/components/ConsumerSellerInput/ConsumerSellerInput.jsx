import './ConsumerSellerInput.scss'

function ConsumerSellerInput({submit}) {

  return (
    <section className='user-choice'>
      <h1 className='user-choice__title'>Consumers and Sellers</h1>
      <form id='dataForm' >
        <label htmlFor='dataModel' className='user-choice__form__label'>
          Which type of analysis would you like to see:
        </label>
        <select name='dataModel' form='dataForm' onChange={submit} className='user-choice__form__options'>
          <option>-- No Selection --</option>
          <option value='tableau-dashboard'>Tableau Dashboard</option>
          <option value='pros-and-cons'>Pros and Cons</option>
          <option value='top-reviews'>Top Reviews</option>
        </select>
      </form>
    </section>
  )
}

export default ConsumerSellerInput;