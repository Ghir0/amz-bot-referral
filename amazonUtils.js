const fetch = require('node-fetch'); // This should be at the TOP of the file

const isAmazonUrl = (url) => {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.includes('amazon.') || urlObj.hostname.includes('amzn.');
  } catch {
    return false;
  }
};

// Function to randomly select an affiliate ID from a list
const getRandomAffiliateId = () => {
  // List of affiliate IDs
  const affiliateIds = [
    'miketama-21',
    'miketama02-21',
    'miketama03-21'
  ];
  
  // Get a random index
  const randomIndex = Math.floor(Math.random() * affiliateIds.length);
  
  // Return the randomly selected ID
  return affiliateIds[randomIndex];
};

const transformAmazonUrl = async (url) => {
  try {
    console.log('Processing URL:', url);
    
    // Handle short URLs (amzn.to links)
    if (url.includes('amzn.to')) {
      console.log('Detected short URL, attempting to resolve...');
      try {
        // Changed from HEAD to GET method
        const response = await fetch(url, { 
          method: 'GET',
          redirect: 'follow'
        });
        console.log('Fetch response status:', response.status);
        if (response.ok) {
          console.log('Original URL:', url);
          url = response.url; // Get the redirected URL
          console.log('Resolved to full URL:', url);
        } else {
          console.log('Failed to resolve short URL, response not OK');
        }
      } catch (fetchError) {
        console.error('Error during fetch operation:', fetchError);
      }
    }
    
    // Rest of the function remains the same
    console.log('Extracting product ID from:', url);
    const productIdMatch = url.match(/\/([A-Z0-9]{10})(?:\/|\?|$)/);
    if (!productIdMatch) {
      console.log('No product ID found in URL');
      return null;
    }
    
    const productId = productIdMatch[1];
    console.log('Extracted product ID:', productId);
    
    // Get a random affiliate ID instead of using a fixed one
    const affiliateId = getRandomAffiliateId();
    console.log('Selected affiliate ID:', affiliateId);
    
    const finalUrl = `https://www.amazon.it/dp/${productId}?tag=${affiliateId}`;
    console.log('Generated referral URL:', finalUrl);
    return finalUrl;
  } catch (error) {
    console.error('Error transforming URL:', error);
    return null;
  }
};

module.exports = {
  isAmazonUrl,
  transformAmazonUrl
};