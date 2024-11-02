import './ConsumerSellerInput.scss'

function ConsumerSellerInput({submit}) {

  return (
    <section>
      <h1>Consumers and Sellers</h1>
      <form id='dataForm' onSubmit={submit}>
        <label htmlFor='dataModel'>
          Which type of analysis would you like to see:
        </label>
        <select name='dataModel' form='dataForm'>
          <option value='tableau-dashboard'>Tableau Dashboard</option>
          <option value='pros-and-cons'>Pros and Cons</option>
          <option value='top-reviews'>Top Reviews</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default ConsumerSellerInput;