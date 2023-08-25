import React, { useState, useEffect } from 'react';
import QuestionAnswerContainer from './questionsAnswers/QuestionAnswerContainer.jsx';
import RelatedProducts from './relatedProducts/relatedProducts.jsx';
import RatingReviews from './RatingReviews/RatingsReviews.jsx';
import ProductDetails from './productDetails/index.jsx';





const App = () => {
  const [currentProduct, setCurrentProduct] = useState(37323);
  const [style, setStyle] = useState(225228);

  return (
    <div className="flex flex-col justify-center mx-36">
      <div className="mt-14">
        {/* <ProductDetails productId={currentProduct}/> */}
      </div>
      <RelatedProducts theId={currentProduct} theSid={style}/>
      <QuestionAnswerContainer productId={currentProduct}/>
      <div className="mb-14">
        <RatingReviews productId={currentProduct}/>
      </div>

    </div>
  );
};

export default App;
