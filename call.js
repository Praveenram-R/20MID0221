const axios = require('axios');

const data = {
  "companyname": "praveenram",
  "ownername": "praveenram",
  "rollno": "20mid0221",
  "owneremail": "praveenramrkr@gmail.com",
  "accesscode": "Avvsyl"
};
axios.post('http://20.244.56.144/test/register', JSON.stringify(data))
  .then(response => {
    console.log("API Response Status:", response.status);
    console.log("API Response Data:", response.data); 
  })
  .catch(error => {
    console.error("Error:", error); 
  });
