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

  const submitForm = (e) => {
    e.preventDefault();
    setSelection(selection=e.target.dataModel.value);
  }

  useEffect(() => {
    navigate(`/consumer-seller/${selection}`)
  },[selection])

  return (
    <>
      <ConsumerSellerInput
        submit={submitForm}
      />

      {data=='tableau-dashboard' && selection ? (
        <ConsumerSellerTableau />
      ) : data=='pros-and-cons' && selection ? (
        <ConsumerSellerProsAndCons /> 
      ): data=='top-reviews' && selection ? (
        <ConsumerSellerTopReviews />
      ): (
        ''
      )}


    </>
  )
}

export default ConsumerSellerPage;