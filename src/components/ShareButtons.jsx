import React from 'react';

const ShareButtons = () => {
  const handleShareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`);
  };

  const handleShareTwitter = () => {
    window.open(`https://twitter.com/share?url=${encodeURIComponent(window.location.href)}`);
  };

  const handleShareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(window.location.href)}`);
  };

  return (
    <div>
      <button onClick={handleShareFacebook}>Share on Facebook</button>
      <button onClick={handleShareTwitter}>Share on Twitter</button>
      <button onClick={handleShareWhatsApp}>Share on WhatsApp</button>
    </div>
  );
};

export default ShareButtons;
