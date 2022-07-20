const _getResults = require('../SpotifyAPI/_getResults');
const _getAlbum = require('../SpotifyAPI/_getAlbum');
const _getAlbums = require('../SpotifyAPI/_getAlbums');
const { Comment, User } = require('../models');

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

exports.comments = async (req, res) => {
  try {
    const allComments = await Comment
      .find({})
      .populate("userId")
      .sort({
        createdAt: -1
      });
    
    const latestComments = allComments.slice(0, 10);

    const commentAlbumIds = latestComments.map(comment => comment.albumId);

    const commentAlbums = await _getAlbums(commentAlbumIds);

    const commentAlbumsObj = {};
    for (const album of commentAlbums) {
      commentAlbumsObj[album.id] = album;
    }
    const comments = [];
    for (const comment of latestComments) {
      const album = { album: commentAlbumsObj[comment.albumId] };
      const commentWithAlbum = { ...comment, ...album };
      comments.push(commentWithAlbum);
    }

    return res.json(comments);
  } catch (error) {
    console.log(error);
  }
}