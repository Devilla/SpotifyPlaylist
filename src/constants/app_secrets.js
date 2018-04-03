let prod = true;

const scopes = "user-read-private+user-read-email+playlist-read-private+user-top-read+user-read-recently-played";
const redirectURI = prod ? "http://localhost:8080/": "http://localhost:8080/";

export const clientID = "1c3d2b2050dc4af78bbffa05c87f1fed";
export const clientSecret = "0310813eaca3461ea44ac95ffd4b161a";
export const spotifyWebApiURL = `https://accounts.spotify.com/authorize/?client_id=${clientID
}&response_type=token&redirect_uri=${redirectURI}&scope=${scopes}`;
export const spotifyProfileURL = "https://api.spotify.com/v1/me?access_token=";
export const spotifyPlaylistURL = "https://api.spotify.com/v1/me/playlists?access_token=";
export const spotifySearchURL = "https://api.spotify.com/v1/search?q=";
export const spotifyArtistURL = "https://api.spotify.com/v1/artists/";
export const spotifyAlbumURL = "https://api.spotify.com/v1/albums/";