/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { tierColor } from '../../utils/tierColor';
import { useCollections } from '../../context/collectionsContext';
import SaveButton from './SaveButton';

/*
 * /collections/:id/tree
 */

const TreeContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const TierRow = styled.div({
  display: 'flex',
});

const TierColumn = styled.div({
  width: '8rem',
});

const TierBlock = styled.div({
  width: '8rem',
  height: '8rem',
  marginBottom: '1rem',
});

const TreeColumn = styled.div({
  flexGrow: '1',
  display: 'flex',
  alignItems: 'center',
});

const TreeNode = styled.div({
  marginLeft: '1rem',
});

function TreeScreen() {
  const { collection } = useCollections();
  const { name, wrappers } = collection;
  return name ? (
    <div>
      <div css={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Tree</h1>
        <SaveButton />
      </div>
      <TreeContainer>
        {wrappers
          .slice()
          .reverse()
          .map((w) => (
            <TierRow key={w.tier}>
              <TierColumn>
                <TierBlock css={[tierColor(w.tier)]}></TierBlock>
              </TierColumn>
              <TreeColumn>
                {w.nodes.map((n, i) => (
                  <TreeNode key={`${n.name}-${i}`}>{n.name}</TreeNode>
                ))}
              </TreeColumn>
            </TierRow>
          ))}
      </TreeContainer>
    </div>
  ) : (
    ''
  );
}

export default TreeScreen;
