import React, { useState, useEffect } from 'react';
import Banner from '../../common/Banner';
import ScrollContainer from '../../common/ScrollContainer';
import MediaPlayer from '../../common/MediaPlayer';
import dashbord from '../../../api/dashboard';
import { Container } from './styles';

const DiscoverPage = () => {
  const [newReleases, setNewReleases] = useState([]);
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);

  const { fetchNewReleases, fetchPlaylists } = dashbord();

  useEffect(() => {
    async function fetchData() {
      const resReleases = await fetchNewReleases();
      const resPlaylists = await fetchPlaylists();
      setNewReleases(resReleases.albums.items);
      setFeaturedPlaylists(resPlaylists.playlists.items);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Banner />
      <div>
        <ScrollContainer items={newReleases} title="Released this week" />
        <ScrollContainer items={featuredPlaylists} title="Featured playlists" />
      </div>
      <MediaPlayer />
    </Container>
  );
};

export default DiscoverPage;
