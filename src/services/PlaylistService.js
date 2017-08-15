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
    }
}

export default PlaylistService;
