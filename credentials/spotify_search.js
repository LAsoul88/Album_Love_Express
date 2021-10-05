const axios = require('axios');

const getToken = require('./spotify_auth');


const searchReturn = async (searchQuery) => {
  const token = await getToken();
  const query = await axios.get(`https://api.spotify.com/v1/search?q=${searchQuery}&type=album&market=US&limit=10`, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
  return query.data.albums.items;
};

module.exports = searchReturn;