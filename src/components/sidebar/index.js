import React from 'react';
import Avatar from '../common/Avatar';
import avatar from '../../assets/avatar.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeadphonesSimple,
  faMagnifyingGlass,
  faHeart,
  faCirclePlay,
  faBarsStaggered
} from '@fortawesome/free-solid-svg-icons';
import * as Styled from './styles';

const Sidebar = () => {
  const navItems = [
    {
      icon: faHeadphonesSimple,
      label: 'Discover'
    },
    {
      icon: faMagnifyingGlass,
      label: 'Search'
    },
    {
      icon: faHeart,
      label: 'Favourites'
    },
    {
      icon: faCirclePlay,
      label: 'Playlists'
    },
    {
      icon: faBarsStaggered,
      label: 'Charts'
    }
  ];

  return (
    <Styled.SidebarContainer>
      <Avatar src={avatar} />
      <Styled.Nav>
        {navItems.map(item => (
          <li key={item.label}>
            <Styled.NavLink href="#!">
              <div>
                <FontAwesomeIcon icon={item.icon} />
                <Styled.NavLabel>{item.label}</Styled.NavLabel>
              </div>
            </Styled.NavLink>
          </li>
        ))}
      </Styled.Nav>
    </Styled.SidebarContainer>
  );
};

export default Sidebar;
