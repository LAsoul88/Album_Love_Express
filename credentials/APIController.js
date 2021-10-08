const APIController = (() => {

  const clientId = '2f212092437640b08c1577de2c87a6b3';
  const clientSecret = process.env.CLIENT_SECRET;

  const _getToken = async () => {

    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + Buffer.from( clientId + ':' + clientSecret, 'base64')
      },
      body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    return data.access_token;
  }

  _searchResults = async (token, searchQuery) => {

    const limit = 10;

    const result = await fetch(`https://api.spotify.com/v1/search?q=coltrane&type=album&market=US&limit=${limit}`, {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + token }
    });

    const data = await result.json();
    return data.items;
  }

});

module.exports = APIController;