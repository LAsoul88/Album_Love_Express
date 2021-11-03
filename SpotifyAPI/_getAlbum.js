const axios = require('axios');
const _getToken = require('./_getToken');

const _getAlbum = async (id) => {
  
  const token = await _getToken();
  return new Promise((resolve, reject) => {
    axios(`https://api.spotify.com/v1/albums/${id}`, {
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

module.exports = _getAlbum;


