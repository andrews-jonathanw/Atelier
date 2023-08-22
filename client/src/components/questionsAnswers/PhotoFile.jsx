import React, {useState, useEffect} from 'react';

const PhotoFile = ({setCount}) => {
  const [file, setFile] = useState('');

  const handleChange = () => {
    

  };

  return (
    <div>
      <input type="file" accept="image/*"/>
    </div>
  );
};

export default PhotoFile;