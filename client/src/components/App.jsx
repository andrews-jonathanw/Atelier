import React, { useState, useEffect } from 'react';
import QuestionAnswerContainer from './questionsAnswers/QuestionAnswerContainer.jsx';
import RelatedProducts from './relatedProducts/relatedProducts.jsx';
import RatingReviews from './RatingReviews/RatingsReviews.jsx';
import ProductDetails from './productDetails/index.jsx';





const App = () => {
  const [currentProduct, setCurrentProduct] = useState(37971);
  const [style, setStyle] = useState(225228);

  return (
    <div>
      <ProductDetails productId={currentProduct}/>
      <RelatedProducts theId={currentProduct} sId={style}/>
      <QuestionAnswerContainer productId={currentProduct}/>
      <RatingReviews productId={currentProduct}/>
    </div>
  );
};

export default App;
