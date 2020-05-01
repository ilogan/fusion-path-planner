/** @jsx jsx */
import { jsx } from '@emotion/core';

import styled from '@emotion/styled';
import { Router, Link } from '@reach/router';
import CollectionListScreen from './CollectionListScreen';
import HomeScreen from './HomeScreen';

// SIDEBAR
const SidebarContainer = styled.aside({
  height: '100vh',
  minWidth: '15rem',
  padding: '1rem',
  backgroundColor: 'red',
});

const LogoContainer = styled.nav({
  marginBottom: '1rem',
  textAlign: 'center',
  border: '1px solid black',
});

function Sidebar() {
  return (
    <SidebarContainer>
      <LogoContainer>
        <Link to="collections">Home</Link>
      </LogoContainer>
      <SidebarRoutes />
    </SidebarContainer>
  );
}

function SidebarRoutes() {
  return (
    <Router>
      <CollectionListScreen path="collections" />
      <Collection path="collections/:id">
        <HomeScreen path="/" />
      </Collection>
    </Router>
  );
}

function Collection({ children }) {
  return <div>{children}</div>;
}

export default Sidebar;
