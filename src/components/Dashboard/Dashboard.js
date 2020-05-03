/** @jsx jsx */
import { jsx } from '@emotion/core';

import styled from '@emotion/styled';
import { Router } from '@reach/router';
import CollectionListScreen from './CollectionListScreen';
import Collection from './Collection';
import HomeScreen from './HomeScreen';
import TreeScreen from './TreeScreen';

// This wraps the routes
const DashboardContainer = styled.div({
  flexGrow: 5,
});

function Dashboard() {
  return (
    <DashboardContainer>
      <DashRoutes />
    </DashboardContainer>
  );
}

function DashRoutes() {
  return (
    <Router>
      <CollectionListScreen path="collections" />
      {/* Collection prepends the route name and adds a navbar at the top of the dashboard */}
      <Collection path="collections/:id">
        <HomeScreen path="/" />
        <TreeScreen path="/tree" />
      </Collection>
    </Router>
  );
}

export default Dashboard;
