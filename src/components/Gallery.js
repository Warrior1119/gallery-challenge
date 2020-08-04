import React, { useState, useEffect, useRef } from 'react';
import Photo from './Photo';

const Gallery = () => {
  const ref = useRef();
  const [images, setImages] = useState([
    'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg',
    'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg',
    'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05588_nb0dma.jpg',
    'https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05459_ziuomy.jpg'
  ]);
  const [url, setUrl] = useState("");
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    if (selected >= 0) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
    }
    
  }, [selected]);

  const onAddImage = () => {
    
    if (url.trim().length > 0) {
      setImages([...images, url]);
      setUrl('')
    }
  }

  const onSelectImage = (index) => {
    setSelected(index);
  }

  const onPrev = () => {
    let prev = selected - 1;
    if (prev < 0) {
      prev = images.length - 1;
    }
    console.log(prev);
    setSelected(prev);
  }

  const onNext = () => {
    let next = selected + 1;
    if (next >= images.length) {
      next = 0;
    }
    setSelected(next);
  }

  const renderImages = () => {
    return images.map((image, idx) => (
      <li key={idx}>
        <img src={image} alt="" loading="lazy" onClick={() => onSelectImage(idx)}/>
      </li>
    ));
  }

  return (
    <div className="gallery" ref={ref}>
      <div className="add">
        <input type="text" placeholder="Add image url" value={url} onChange={(event) => setUrl(event.target.value)} />
        <button onClick={onAddImage}>Add image</button>
      </div>
      <ul>
        {renderImages()}
      </ul>
      {(selected >= 0) && (
        <Photo 
          image={images[selected]} 
          count={images.length} 
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
    </div>
  );
}

export default Gallery;

