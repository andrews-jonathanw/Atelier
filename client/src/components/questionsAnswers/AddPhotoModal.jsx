import React, {useState, useEffect} from 'react';
import PhotoFile from './PhotoFile.jsx';
const AddPhotoModal = () => {
  const [count, setCount] = useState(1);

  const fileInputs = () => {
    for (var i = 0; i < count; i++) {
      return <PhotoFile count={count}/>;
    }
  };

  return (
    <div className="m-1 top-0 flex flex-col">
      {count < 5 && fileInputs()}
    </div>
  );
};



export default AddPhotoModal;