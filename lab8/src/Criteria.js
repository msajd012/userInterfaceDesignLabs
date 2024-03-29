import React, { useState } from 'react';

function GreyableImage(props) {
  const [isGreyedOut, setIsGreyedOut] = useState(false);

  const toggleGrey = () => {
    setIsGreyedOut(!isGreyedOut);
  }

  const imageStyle = {
    filter: isGreyedOut ? 'grayscale(100%)' : 'none',
    width: '64px',
    height: '64px',

  }

  return (
    <img
      src={props.src}
      alt={props.alt}
      title={props.title}
      style={imageStyle}
      onClick={toggleGrey}
    />
  );
}

export default GreyableImage;