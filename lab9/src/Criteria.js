import React, { useState } from 'react';
import { motion } from "framer-motion";

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
    <motion.div whileHover={{ scale: 1.15 }}>
    <img
      src={props.src}
      alt={props.alt}
      title={props.title}
      style={imageStyle}
      onClick={toggleGrey}
    />
    </motion.div>
  );
}

export default GreyableImage;