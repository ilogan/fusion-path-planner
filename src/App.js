/** @jsx jsx */
import { jsx } from '@emotion/core';

import styled from '@emotion/styled';
import { CollectionsProvider } from './context/collectionsContext';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

const AppContainer = styled.div({
  display: 'flex',
});

function App() {
  return (
    <AppContainer>
      <CollectionsProvider>
        <Sidebar />
        <Dashboard />
      </CollectionsProvider>
    </AppContainer>
  );
}

export default App;
