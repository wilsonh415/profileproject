const express = require('express');
const fetch = require('node-fetch');
const app = express();

const port = process.env.PORT | 5000;

app.listen(port, () => {
   console.log("Listening on port: " + port);
});

app.get('/', (request, response) => {
   console.log("This works at least");
   response.send("Hello!!");
});

app.get('/api/issdata', async (request, response) => {
   try {
      const options = {
         method: "GET",
         headers: {
            'Content-Type': 'application/json'
         }
      }
      const apiUrl = 'https://api.wheretheiss.at/v1/satellites/25544'
      const apiResp = await fetch(apiUrl, options);
      const data = await apiResp.json();
      console.log(data);
      response.json(data);
   }
   catch(error) {
      console.log("Error occured: " + error);
      response.json(null);
   }
});

app.get('/api/spacephoto', async (request, response) => {
   const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
   const apiResp = await fetch(apiUrl);
   const data = await apiResp.json();
   response.json(data);
});