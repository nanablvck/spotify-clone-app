import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';
import logo from './Spotify_logo.png';

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className='sidebar'>
        <img className='sidebar__logo' src={logo} alt=''/>
        <SidebarOption Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
        
        <br />
        <strong className='sidebar__title'>PLAYLISTS</strong>
        <hr />

      {playlists?.items?.map(playlist => (
        <SidebarOption className='playlist' title={playlist.name} />
      ))};


    </div>
  );
}

export default Sidebar