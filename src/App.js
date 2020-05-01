/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import styled from '@emotion/styled';
import { Link, Router } from '@reach/router';

const AppContainer = styled.div({
  display: 'flex',
});
const Dashboard = styled.div({
  padding: '1rem',
  flexGrow: 5,
  backgroundColor: 'blue',
});

const sidebar = css({
  height: '100vh',
  minWidth: '15rem',
  padding: '1rem',
  backgroundColor: 'red',
});

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <Dashboard>
        <Router>
          <CollectionList path="/" />
          <CollectionHome path="/collection">
            <Collection path=":id" />
          </CollectionHome>
        </Router>
      </Dashboard>
    </AppContainer>
  );
}

function CollectionList() {
  return (
    <div>
      <h1>Collections</h1>
      <Link to="/collection/1">Specific Collection</Link>
    </div>
  );
}

function CollectionHome({ children }) {
  return <div>{children}</div>;
}

function Collection() {
  return (
    <div>
      <nav>Navbar</nav>
      <h1>Collection</h1>
    </div>
  );
}

function Sidebar() {
  return (
    <aside css={sidebar}>
      <Link to="/">Home</Link>
      <Router>
        <CollectionListNav path="/" />
        <CollectionNav path="/collection/:id" />
      </Router>
    </aside>
  );
}

function CollectionListNav() {
  return <div>Collection*s* Options</div>;
}

function CollectionNav() {
  return <div>Collection Options</div>;
}

export default App;
