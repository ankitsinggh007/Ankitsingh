import './App.css'
import  { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://picsum.photos/500'); // Fetch a random image from picsum.photos
      console.log(response,"response")
      console.log(response);
      
      setImageUrl(response.url);
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };

  const shareUrl = window.location.href; // Get the current page URL

  return (
    <div>
      <Helmet>
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={shareUrl} />
      <meta property="og:description" content={"random image generator"} />
      <meta property="og:title" content={'My Website'} />
      <meta property="og:type" content={'Website'} />
      {console.log("in meta tag ",imageUrl,)}
      {/* Set the image URL as the og:image */}
      </Helmet>
      <img src={imageUrl} alt="Random Image" style={{ display: 'block', margin: '0 auto' }} />
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <FacebookShareButton url={shareUrl}>
          Facebook
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl}>
          Twitter
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl}>
          WhatsApp
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default App;