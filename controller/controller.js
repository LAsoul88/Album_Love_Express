const _getResults = require('../SpotifyAPI/_getResults');
const _getAlbum = require('../SpotifyAPI/_getAlbum');

exports.albums = async (req, res) => {
  try {
    const query = req.query.search;
    if (!query) return res.json([]);

    const albumList = await _getResults(query);
    const albums = albumList.data.albums.items;

  
    return res.json(albums);
  } catch (error) {
    console.log(error);
  }
}

exports.album = async (req, res) => {
  try {
    const albumId = await req.query.id;
    const albumObject = await _getAlbum(albumId);
    const album = await albumObject.data;

    return res.json(album);
  } catch (error) {
    console.log(error);
  }
}