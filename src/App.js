/** @jsx jsx */
import { jsx } from '@emotion/core';

import styled from '@emotion/styled';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

const AppContainer = styled.div({
  display: 'flex',
});

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <Dashboard />
    </AppContainer>
  );
}

export default App;
