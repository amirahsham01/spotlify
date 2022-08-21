import styled from 'styled-components';
import { breakpoints } from '../../helpers/utils';

export const SidebarContainer = styled.div`
  background-color: #4c46ce;
  position: fixed;
  top: 0;
  padding: 0;
  margin: 0;
  z-index: 998;
  width: 15rem;
  height: 100vh;
  transition: all 0.2s ease;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${breakpoints.lg}) {
    width: 5rem;
  }
`;

export const Nav = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;
`;

export const NavLink = styled.a`
  display: block;
  font-weight: 500;
  color: #ffffff;
  opacity: 0.6;
  outline: none;
  text-decoration: none;
  padding: 1.2rem 2rem;

  &:hover,
  &:active {
    background: linear-gradient(to right, #8080d8, transparent 95%);
    opacity: 1;
  }
`;

export const NavLabel = styled.span`
  font-weight: 1rem;
  margin-left: 1.1rem;

  @media (max-width: ${breakpoints.lg}) {
    display: none;
  }
`;
