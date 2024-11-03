import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ConsumerSellerInput from '../../components/ConsumerSellerInput/ConsumerSellerInput';
import ConsumerSellerTableau from '../../components/ConsumerSellerTableau/ConsumerSellerTableau';
import ConsumerSellerProsAndCons from '../../components/ConsumerSellerProsAndCons/ConsumerSellerProsAndCons';
import ConsumerSellerTopReviews from '../../components/ConsumerSellerTopReviews/ConsumerSellerTopReviews';

import './ConsumerSellerPage.scss';

function ConsumerSellerPage() {
  const { data } = useParams();
  const navigate = useNavigate();
  
  let [selection, setSelection] = useState('');
  let [hasLoaded, setHasLoaded] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setSelection(selection=e.target.value);
  }

  useEffect(() => {
    navigate(`/consumer-seller/${selection}`)
  },[selection])

  useEffect(() => {
    setHasLoaded(true);
    navigate(`/consumer-seller/${data}`);
  },[data])

  return (
    <section className='consumer-seller'>
      <ConsumerSellerInput
        submit={submitForm}
      />

      {data=='tableau-dashboard' && hasLoaded ? (
        <ConsumerSellerTableau />
      ) : data=='pros-and-cons' && hasLoaded ? (
        <ConsumerSellerProsAndCons /> 
      ): data=='top-reviews' && hasLoaded ? (
        <ConsumerSellerTopReviews />
      ): (
        <h3>No Data Type Selected</h3>
      )}


    </section>
  )
}

export default ConsumerSellerPage;