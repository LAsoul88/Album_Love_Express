const _getToken = require('./_getToken');

const _getAlbum = async (id) => {
  
  const token = await _getToken();

  const result = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
    method: 'GET',
    headers: { 'Authorization' : 'Bearer ' + token }
  });

  const data = await result.json();
  return data;
};

module.exports = _getAlbum;


