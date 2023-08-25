import React, { useState, useEffect } from 'react';
import QuestionAnswerContainer from './questionsAnswers/QuestionAnswerContainer.jsx';
import RelatedProducts from './relatedProducts/relatedProducts.jsx';
import RatingReviews from './RatingReviews/RatingsReviews.jsx';
import ProductDetails from './productDetails/index.jsx';





const App = () => {
  const [currentProduct, setCurrentProduct] = useState(37323);
  const [style, setStyle] = useState(225228);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      {!darkMode && <div className="fixed w-100vw h-100vh top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-transparent from-10% via-sky-50 via-40% to-transparent">
      </div>}
      {darkMode && <div className="fixed w-100vw h-100vh top-0 left-0 right-0 bottom-0 bg-slate-900">
      </div>}
      <button className="absolute top-0 left-0 py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500" onClick={toggleMode}>Dark Mode</button>
      <div className="relative flex flex-col justify-center mx-36">
        <div className="mt-14">
          <ProductDetails productId={currentProduct}/>
        </div>
        <RelatedProducts theId={currentProduct} theSid={style}/>
        <QuestionAnswerContainer productId={currentProduct}/>
        <div className="mb-14">
          <RatingReviews productId={currentProduct}/>
        </div>
      </div>
    </div>
  );
};

export default App;
