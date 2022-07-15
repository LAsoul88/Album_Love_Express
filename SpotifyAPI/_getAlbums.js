const axios = require('axios');

const _getToken = require('./_getToken');

const _getAlbums = async (arr) => {
  let url = `https://api.spotify.com/v1/albums?ids=`;
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      url += arr[i] + '&market=US'
    } else {
    url += arr[i] + '%2C';
  }
}
  if (url === `https://api.spotify.com/v1/albums?ids=`) {
    console.log('bad url');
    return;
  } else {
    const token = await _getToken();
    const targets = await axios.get(url, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    return targets.data.albums;
  }
};

module.exports = _getAlbums;