import React, { useEffect, useState } from 'react';
import ShareButtons from './ShareButtons';

const ImageDisplay = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://picsum.photos/'); // Replace with the actual image API URL
      const data = await response.json();
      setImageUrl(data.url);
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };

  return (
    <div>
      <img src={'https://picsum.photos/'} alt="Random Image" style={{ display: 'block', margin: '0 auto' }} />
      <ShareButtons />
    </div>
  );
};

export default ImageDisplay;
