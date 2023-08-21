import React, {useState, useEffect} from 'react';

const PhotoFile = ({setCount}) => {
  return (
    <div>
      <input type="file" accept="image/*"/>
    </div>
  );
};

export default PhotoFile;