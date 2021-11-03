const axios = require('axios');
const _getToken = require('./_getToken');

const _getResults = async query => {
  const limit = 50;
  const token = await _getToken();
  return new Promise((resolve, reject) => {
      axios(`https://api.spotify.com/v1/search?q=${query}&type=album&market=US&limit=${limit}`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token }
      })
      .then(albumResponse => {
        resolve(albumResponse);
      })
      .catch(error => {
        console.error('error', error);
        reject(error)
      });
    });
  }


module.exports = _getResults;