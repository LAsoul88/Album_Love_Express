const axios = require('axios');

const getToken = require('./spotify_auth');

const getAlbum = async (id) => {
  const token = await getToken();
  const target = await axios.get(`https://api.spotify.com/v1/albums/${id}`, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
  return target.data;
};

module.exports = getAlbum;