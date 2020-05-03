/** @jsx jsx */
import { jsx } from '@emotion/core';

import styled from '@emotion/styled';
import { Router, Link } from '@reach/router';

import CollectionListScreen from './CollectionListScreen';
import HomeScreen from './HomeScreen';

// SIDEBAR
const SidebarContainer = styled.aside({
  height: 'auto',
  minHeight: '100vh',
  minWidth: '15rem',
  padding: '1rem',
  boxShadow: '0 4px 4px rgba(0,0,0,20%)',
  backgroundColor: '#2D3748',
  zIndex: '1',
  color: '#FFFFFF',
});

const LogoContainer = styled.nav({
  marginBottom: '2rem',
  textAlign: 'center',
  borderBottom: '1px solid #FFFFFF',
});

function Sidebar() {
  return (
    <SidebarContainer>
      <LogoContainer>
        <Link
          css={{
            color: '#F5CB5C',
            fontSize: '1.25rem',
            '&:hover': { textDecoration: 'none', color: ' #F5CB5C' },
          }}
          to="collections"
        >
          Fusion Path Planner
        </Link>
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
