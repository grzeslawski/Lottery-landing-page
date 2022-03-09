import React from 'react';

function ImageInWebP({ name, alternativeFormat = 'png', alt = null }) {
  const alternativeAlt = alt ? alt : name;
  return (
    <picture>
      <source
        srcSet={`${process.env.PUBLIC_URL}/img/${name}.webp, ${process.env.PUBLIC_URL}/img/${name}@2x.webp 2x, ${process.env.PUBLIC_URL}/img/${name}@3x.webp 3x`}
        type="image/webp"
      />
      <source
        srcSet={`${process.env.PUBLIC_URL}/img/${name}.${alternativeFormat}, ${process.env.PUBLIC_URL}/img/${name}@2x.${alternativeFormat} 2x, ${process.env.PUBLIC_URL}/img/${name}@3x.${alternativeFormat} 3x`}
        type={`image/${alternativeFormat}`}
      />
      <img
        src={`${process.env.PUBLIC_URL}/img/${name}.${alternativeFormat}`}
        alt={alternativeAlt}
        loading="lazy"
      />
    </picture>
  );
}

export default ImageInWebP;
