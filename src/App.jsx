import './App.css'
import  { useEffect, useState } from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://picsum.photos/500'); // Fetch a random image from picsum.photos
      setImageUrl(response.url);
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };

  const shareUrl = window.location.href; // Get the current page URL

  return (
    <div>
      <Helmet>
        <meta property="og:image" content={imageUrl} /> {/* Set the image URL as the og:image */}
      </Helmet>
      <img src={imageUrl} alt="Random Image" style={{ display: 'block', margin: '0 auto' }} />
      <div>
        <FacebookShareButton url={shareUrl}>
          Share on Facebook
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl}>
          Share on Twitter
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl}>
          Share on WhatsApp
        </WhatsappShareButton>
      </div>
    </div>
  );
};
