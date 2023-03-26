import React, { useState } from 'react';

function GreyableImage(props) {

  const toggleGrey = () => {
    props.setActive(!props.active);
  }

  const imageStyle = {
    filter: props.active ? 'none' : 'grayscale(100%)',
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