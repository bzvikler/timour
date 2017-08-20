import firebase from 'firebase';

const PlaylistService = {
    getDatabase: () => {
        return firebase.database();
    },

    createPlaylist: (playlistName, djName, playlistDateToLive, user, playlistId) => {
        firebase.database().ref('playlists/' + playlistId).set({
            userId: user,
            playListName: playlistName,
            djName: djName,
            dateCreated: new Date().toUTCString(),
            dateToLive: playlistDateToLive.toUTCString()
        });
    },

    postPlaylistEditCode: (playlistId, playlistEditCode) => {
        console.log(playlistId);
        firebase.database().ref('playlists/' + playlistId).update({
            playlistEditCode
        });
    }
}

export default PlaylistService;
