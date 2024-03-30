const axios = require('axios');

const data = {
    companyName: 'praveenram',
    clientID: 'a44cec83-3df6-400a-90e4-06bf56107262',
    clientSecret: 'lLwMJjRTUihjaOxA',
    ownerName: 'praveenram',
    ownerEmail: 'praveenramrkr@gmail.com',
    rollNo: '20mid0221'
  };
axios.post('http://20.244.56.144/test/auth', JSON.stringify(data))
  .then(response => {
    console.log("API Response Status:", response.status);
    console.log("API Response Data:", response.data); 
  })
  .catch(error => {
    console.error("Error:", error); 
  });
