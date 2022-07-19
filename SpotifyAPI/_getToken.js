const axios = require('axios');
require('dotenv').config();

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const _getToken = async () => {
  return new Promise ((resolve, reject) => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(`${clientId}:${clientSecret}`)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    .then(tokenResponse => {
      resolve(tokenResponse.data.access_token)
    })
    .catch(error => {
      console.error('error', error);
      reject(error)
    })
  })
}

module.exports = _getToken;