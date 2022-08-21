import axios from 'axios';

const baseUrl = process.env.REACT_APP_SPOTLIFY_BASE_URL;

export default function dashbord() {
  const fetchNewReleases = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: `${baseUrl}/new-releases`,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      });

      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      console.error('error', err);
    }
  };

  const fetchPlaylists = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: `${baseUrl}/featured-playlists`,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      });

      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      console.error('error', err);
    }
  };

  return {
    fetchNewReleases,
    fetchPlaylists
  };
}
