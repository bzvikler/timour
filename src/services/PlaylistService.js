import firebase from 'firebase';

const PlaylistService = {
    getDatabase: () => {
        return firebase.database();
    },

    createPlaylist: (id, user, playlistName, djName) => {
        firebase.database().ref('playlists/' + id).set({
            playListName: playlistName,
            djName: djName
        });
    }
}

export default PlaylistService;
