/** @jsx jsx */
import { jsx } from '@emotion/core';

import styled from '@emotion/styled';
import { CollectionsProvider } from './context/collectionsContext';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

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
